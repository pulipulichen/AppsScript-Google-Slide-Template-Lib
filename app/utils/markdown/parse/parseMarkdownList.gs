function parseMarkdownList(markdown, config = {}) {
    const lines = markdown.split('\n').filter(line => line.trim() !== '');
    const result = [];
    const indentStack = [];

    const romanRegex = /^[ivxlcdmIVXLCDM]+\.$/;

    for (let line of lines) {
        line = convertPlainUrlsToMarkdownLinks(line)

        const match = line.match(/^(\s*)([\d]+\.|[a-zA-Z]{1,4}\.|[-*+])\s+(.+)$/);
        if (!match) {
            let {
                title, subtitle
            } = parseMarkdownListItemTitle(line)
            // 加入層級0
            result.push({ 
                level: -1, 
                text: line, 
                type: 'paragraph', 
                title, 
                subtitle, 
                picture: parseMarkdownListExtractPicture(line, config)
            });
            continue
        }

        const indent = match[1] || '';
        const marker = match[2];
        let text = match[3];

        // 將 tab 換成 4 空白再算長度
        const indentLength = indent.replace(/\t/g, '    ').length;

        // 判斷清單類型
        const isNumber = /^\d+\.$/.test(marker) || /^[a-zA-Z]{1,4}\.$/.test(marker) || romanRegex.test(marker);
        const type = isNumber ? 'number' : 'bullet';

        // 判斷層級（依縮排長度比對）
        let level = indentStack.findIndex(len => len === indentLength);
        if (level === -1) {
            // 如果沒找到對應層級，視為新層級
            indentStack.push(indentLength);
            level = indentStack.length - 1;
        } else {
            // 清除比目前更深的縮排（回到上一層）
            indentStack.length = level + 1;
        }

        let picture = parseMarkdownListExtractPicture(text, config)
        

        let {title, subtitle} = parseMarkdownListItemTitle(text)

        result.push({ level, text, type, title, subtitle, picture });
    }

    return result;
}

function parseMarkdownListExtractPicture(text, config) {
    let picture
    try {
        // picture = text.match(/!\[.*?\]\((.*?)\)/)[1];
        picture = extractImageURLFromMarkdown(text, config)
        
        text = text.replace(/!\[.*?\]\(.*?\)/g, '')
    }
    catch (e) {
        // Logger.log('沒有圖片：' + e)
    }
    return picture
}


function parseMarkdownListItemTitle(text) {
    
    // 分析標題
    let title, subtitle

    // let pos = text.indexOf(':')
    // if (pos === -1) {
    //     pos = text.indexOf('：')
    // }

    let pos = text.indexOf(': ')
    
    if (pos > -1) {
        title = text.slice(0, pos).trim()
        subtitle = text.slice(pos + 1).trim()
    }

    return {title, subtitle}
}

function convertPlainUrlsToMarkdownLinks(markdown) {
// 排除圖片 ![](url) 和連結 [text](url)
const regex = /(?<!\]\()(?<!\!\[.*?\]\()\b(https?:\/\/[\w\-._~:\/?#[\]@!$&'()*+,;=%]+)/g;

return markdown.replace(regex, (url) => `[${url}](${url})`);
}
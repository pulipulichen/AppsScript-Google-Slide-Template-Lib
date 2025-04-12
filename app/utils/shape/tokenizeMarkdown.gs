/**
 * 將簡單 Markdown 語法轉換為格式化的文字區段
 * 支援 **bold**, _underline_, [text](url)
 */
function tokenizeMarkdown(text) {
  const tokens = [];
  let remaining = text;

  // 合併正則：粗體、底線、刪除線、斜體、超連結
  const regex = /(\*\*(.+?)\*\*|_(.+?)_|~~(.+?)~~|\*(.+?)\*|\[(.+?)\]\((.+?)\))/g;
  let match;
  let lastIndex = 0;

  while ((match = regex.exec(remaining)) !== null) {
    if (match.index > lastIndex) {
      tokens.push({ text: remaining.slice(lastIndex, match.index) });
    }

    if (match[2]) {
      tokens.push({ text: match[2], bold: true });
    } else if (match[3]) {
      tokens.push({ text: match[3], underline: true });
    } else if (match[4]) {
      tokens.push({ text: match[4], strikethrough: true });
    } else if (match[5]) {
      tokens.push({ text: match[5], italic: true });
    } else if (match[6] && match[7]) {
      tokens.push({ text: match[6], link: match[7] });
    }

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < remaining.length) {
    tokens.push({ text: remaining.slice(lastIndex) });
  }

  return tokens;
}
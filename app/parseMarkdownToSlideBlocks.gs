function parseMarkdownToSlideBlocks(markdown) {
  markdown = markdown.trim().split('\n---\n').join('\n----\n')

  const slidesMarkdown = markdown.split('\n----\n'); 
  const output = []

  for (let slideMarkdown of slidesMarkdown) {
    slideMarkdown = slideMarkdown.trim()

    let notes = null
    if (slideMarkdown.indexOf("::: notes") > -1) {
      let startPos = slideMarkdown.indexOf('::: notes') + 9
      let endPos = slideMarkdown.indexOf(':::', startPos)
      notes = slideMarkdown.slice(startPos, endPos).trim()
      slideMarkdown = slideMarkdown.slice(0 , startPos - 9) + slideMarkdown.slice(endPos + 3)
    }

    const lines = slideMarkdown.split('\n');
    let layout = null
    const result = [];

    let bodyBuffer = []

    let appendBody = () => {
      if (bodyBuffer.length > 0) {
        result.push({
          type: "BODY",
          text: bodyBuffer.join('\n') 
        })
        bodyBuffer = []
      }
    }

    for (const line of lines) {
      const trimmed = line.trim();

      // let isBody = false
      if (trimmed.startsWith('::: layout=')) {
        layout = trimmed.slice(11)
      } else if (trimmed.startsWith('# ')) {
        let title = trimmed.replace(/^#\s*/, '');
        appendBody()
        result.push({
          type: "TITLE",
          text: title
        })
      } else if (trimmed.startsWith('##')) {
        let subtitle = trimmed.slice(trimmed.indexOf('## ') + 3).trim()
        appendBody()
        result.push({
          type: "SUBTITLE",
          text: subtitle
        })
      } else if (/^!\[.*?\]\((.*?)\)/.test(trimmed)) {
        const imageUrl = trimmed.match(/^!\[.*?\]\((.*?)\)/)[1];
        appendBody()
        result.push({
          type: "BODY",
          text: trimmed
        })
      }
      else if (trimmed === '') {
        appendBody()
      }
      else {
        bodyBuffer.push(line)
      }
    }

    appendBody()

    let types = {}

    for (let item of result) {
      let {type, text} = item
      if (!types[type]) {
        types[type] = []
      }
      types[type].push(text)
    }

    let item = {
      elements: result,
      types
    }
    if (layout) {
      item.layout = layout
    }
    if (notes) {
      item.notes = notes
    }

    output.push(item)
  }
  

  return output;
}

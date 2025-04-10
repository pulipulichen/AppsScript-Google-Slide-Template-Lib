function parseMarkdownToSlideBlocks(markdown) {
  markdown = markdown.trim()
  if (markdown.startsWith('---')) {
    markdown = markdown.slice(markdown.indexOf('\n') + 1).trim()
  }
  if (markdown.endsWith('---')) {
    markdown = markdown.slice(0, markdown.lastIndexOf('\n') ).trim()
  }

  markdown = markdown.split('\n--- \n').join('\n----\n')
  markdown = markdown.split('\n---  \n').join('\n----\n')
  markdown = markdown.split('\n---\n').join('\n----\n')


  const slidesMarkdown = markdown.split('\n----\n'); 
  const output = []

  for (let i = 0; i < slidesMarkdown.length; i++) {
    let slideMarkdown = slidesMarkdown[i]
    slideMarkdown = slideMarkdown.trim()

    if (slideMarkdown === '') {
      continue
    }

    let notes = []
    if (slideMarkdown.indexOf("::: notes") > -1) {
      let startPos = slideMarkdown.indexOf('::: notes') + 9
      let endPos = slideMarkdown.indexOf(':::', startPos)
      if (endPos === -1) {
        endPos = slideMarkdown.length - 1
        notes = [slideMarkdown.slice(startPos, endPos).trim()]
        slideMarkdown = slideMarkdown.slice(0 , startPos - 9)
        // Logger.log({
        //   endPos, note: notes[0], slideMarkdown
        // })
      }
      else {
        notes = [slideMarkdown.slice(startPos, endPos).trim()]
        slideMarkdown = slideMarkdown.slice(0 , startPos - 9) + slideMarkdown.slice(endPos + 3)
      }
    }
    
    const lines = slideMarkdown.split('\n');
    let layout = null
    let cite = null
    let smartart = null
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

    let appendCode = () => {
      if (codeBuffer.length > 0) {
        result.push({
          type: "BODY",
          text: codeBuffer.join('\n') 
        })
        codeBuffer = []
      }
    }

    let codeBuffer = []
    let isCode = false

    for (const line of lines) {
      const trimmed = line.trim();

      // let isBody = false
      if (trimmed.startsWith('::: layout:') || trimmed.startsWith('::: layout=')) {
        layout = trimmed.slice(trimmed.indexOf(' layout') + 8)
      }
      else if (trimmed.startsWith('::: cite:') || trimmed.startsWith('::: cite=') || trimmed.startsWith('::: cite ')) {
        cite = trimmed.slice(trimmed.indexOf(' cite') + 6).trim()
      }
      else if (trimmed.startsWith('::: smartart')) {
        smartart = trimmed.slice(trimmed.indexOf(' smartart') + 1)
      }
      else if (trimmed.startsWith('::: note')) {
        notes.push(trimmed.slice(trimmed.indexOf(' note') + 5))
      }
      else if (trimmed.startsWith('::: notes')) {
        notes.push(trimmed.slice(trimmed.indexOf(' notes') + 6))
      }
      else if (trimmed.startsWith('::: ')) {
        let text = trimmed.slice(trimmed.indexOf('::: ') + 4).trim()
        if (!cite) {
          cite = text
        }
        else {
          notes.push(text)
        }
      }
      else if (line.startsWith('>')) {
        notes.push(line.slice(2))
      }
      else if (isCode) {
        codeBuffer.push(line)
      }
      else if (trimmed.startsWith('# ')) {
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
      else if (trimmed.startsWith('```')) {
        if (isCode === false) {
          isCode = true 
          appendCode()
          codeBuffer.push(line)
        }
        else {
          isCode = false
          codeBuffer.push(line)
          appendCode()
        }
      }
      else {
        bodyBuffer.push(line)
      }
    }

    appendBody()
    appendCode()

    // ===================

    if (smartart) {
      for (let i = 0; i < result.length; i++) {
        let {type, text} = result[i]

        if (type === 'BODY' && text.includes('\n')) {
          result[i].text = "``` " + smartart + '\n' + result[i].text + '\n```'
        }
        Logger.log(result[i].text)
      }
    }

    // ===================

    let types = {}

    for (let item of result) {
      let {type, text} = item
      if (!types[type]) {
        types[type] = []
      }
      types[type].push(text)
    }

    // ===================

    let item = {
      elements: result,
      types,
      slideMarkdown
    }
    if (layout) {
      item.layout = layout
    }
    

    if (cite) {
      item.cite = cite

      if (notes.length > 0) {
        notes = notes.concat(['\n----\n'])  
      }
      notes.push(cite)
    }

    if (notes.length > 0) {
      notes = notes.concat(['\n----\n'])  
    }
    notes.push(slideMarkdown)

    if (Array.isArray(notes)) {
      notes = notes.join('\n')
    }

    item.notes = notes
    // Logger.log(notes)
    
    output.push(item)
  }
  
  // Logger.log(output)

  return output;
}

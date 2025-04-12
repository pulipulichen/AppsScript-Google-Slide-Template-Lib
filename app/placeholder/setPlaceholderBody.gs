function setPlaceholderBody(shape, markdown, alignCenter = false) {
  if (typeof(shape.asShape) === 'function') {
    shape = shape.asShape()
  }

  markdown = markdown.trim()
  if (markdown === '') {
    return false
  }

  let placeholder = shape
  // let content = markdown

  // ==========

  let list = parseMarkdownList(markdown)

  // Logger.log(markdown)
  // Logger.log(list)

  let textRange = placeholder.getText()
  
  let level0Type = null
  let hasList = false
  for (let item of list) {
    let {level, type, text} = item

    if (level === 0 && !level0Type) {
      level0Type = type
    }

    let indent = ''
    for (let i = 0; i < level; i++) {
      indent = `\t` + indent
    }
    // textRange.appendParagraph(text)

    // Logger.log(textRange.getLength())
    let paragraphRange
    if (textRange.getLength() === 1) {
      textRange.setText(indent)
      // Logger.log("[" + indent + text + ']')
      paragraphRange = insertMarkdownToParagraph(textRange, text)
    }
    else {
      paragraph = textRange.appendParagraph(indent)
      // Logger.log("[" + indent + text + ']')
      paragraphRange = insertMarkdownToParagraph(paragraph.getRange(), text)
    }

    Logger.log({level, type, text})
    if (type !== 'paragraph') {
      let listStype = textRange.getListStyle()
      listStype.applyListPreset(SlidesApp.ListPreset.DISC_CIRCLE_SQUARE);
      hasList = true
    }
  }

    

  // let paragraphs = textRange.getListParagraphs()
  // for (let paragraph of paragraphs) {
  //   let paragraphStyle = paragraph.getRange().getParagraphStyle()
  //   paragraphStyle.setSpaceBelow(10)
  // }

  
  // Logger.log(paragraphStyle.getSpaceBelow())

  // if (level0Type === 'bullet') {
  //   textRange.getListStyle().applyListPreset(SlidesApp.ListPreset.DISC_CIRCLE_SQUARE);
  // }
  // else {
  //   textRange.getListStyle().applyListPreset(SlidesApp.ListPreset.DIGIT_ALPHA_ROMAN);
  // }

  // let paragraphs = textRange.getListParagraphs()
  // for (let i = 0; i < paragraphs.length; i++) {
  //   let paragraph = paragraphs[i]
  //   if (!list[i]) {
  //     Logger.log('Out of range: ' + i)
  //     continue
  //   }
  //   let {level, type, text} = list[i]

  //   if (type !== level0Type) {
  //     if (type === 'number') {
  //       paragraph.getRange().getListStyle().applyListPreset(SlidesApp.ListPreset.DISC_CIRCLE_SQUARE);
  //     }
  //     else {
  //       paragraph.getRange().getListStyle().applyListPreset(SlidesApp.ListPreset.DIGIT_ALPHA_ROMAN);
  //     }
  //   }
  // }

  if (alignCenter === true) {
    // 先看看是垂直還是橫向

    // let pos = checkShapePosition(shape)
    // if (checkShapeOrientation(shape) === 'portrait') {
    //   if (pos.left === true) {
    //     // 設定水平
    //   }
    // }
    // else {

    // }
    shape.setContentAlignment(SlidesApp.ContentAlignment.MIDDLE)

    let textRange = shape.getText()
    

    // if (checkShapeOrientation(shape) === 'portrait') {
    //   if (pos.left === true) {
    //     // 設定水平
    //   }
    // }
    if (hasList === false) {
      let paragraphStyle = textRange.getParagraphStyle()
      paragraphStyle.setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER)
    }
      
    
  }
}
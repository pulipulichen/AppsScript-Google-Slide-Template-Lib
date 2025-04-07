function setPlaceholderBody(shape, markdown) {
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
    if (textRange.getLength() === 1) {
      textRange.setText(indent)
      // Logger.log("[" + indent + text + ']')
      insertMarkdownToParagraph(textRange, text)
    }
    else {
      let paragraph = textRange.appendParagraph(indent)
      // Logger.log("[" + indent + text + ']')
      insertMarkdownToParagraph(paragraph.getRange(), text)
    }
  }

  let listStype = textRange.getListStyle()

  // let paragraphStyle = textRange.getParagraphStyle()
  // paragraphStyle.setSpaceAbove(0.5)
  // paragraphStyle.setSpaceBelow(3)

  listStype.applyListPreset(SlidesApp.ListPreset.DISC_CIRCLE_SQUARE);

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
}
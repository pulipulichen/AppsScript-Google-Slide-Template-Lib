function insertMarkdownToParagraph(paragraphRange, markdownText, config = {}) {
  // 將 Markdown 轉成格式分段
  const tokens = tokenizeMarkdown(markdownText);

  const {
    exclude = []
  } = config

  
  for (const token of tokens) {
    if (token.link && exclude.includes('link')) {
      continue
    }

    const textRange = paragraphRange.appendText(token.text);
    // Logger.log(token)


    const style = textRange.getTextStyle()
    
    // ===============

    if (token.bold) {
      style.setBold(true);
    }
    else if (style.isBold() === true) {
      style.setBold(false);
    }

    // ===============
      
    if (token.underline) {
      style.setUnderline(true);
    }
    else if (style.isUnderline() === true) {
      style.setUnderline(false);
    }

    // ===============
      
    if (token.strikethrough) {
      style.setStrikethrough(true);
    }
    else if (style.isStrikethrough() === true) {
      style.setStrikethrough(false);
    }

    // ===============
      
    if (token.italic) {
      style.setItalic(true);
    }
    else if (style.isItalic() === true) {
      style.setItalic(false);
    }

    // ===============
    
    if (token.link) {
      style.setLinkUrl(token.link);
    }
    else {
      style.removeLink()
    }
  }

  // ===============

  // let paragraphStyle = paragraphRange.getParagraphStyle()
  // paragraphStyle.setSpaceAbove(20)

  return paragraphRange
}

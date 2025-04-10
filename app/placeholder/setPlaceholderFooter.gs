function setPlaceholderFooter(sortedPlaceholders, footer, config = {}) {
  if (!footer) {
    return false
  }

  // ===========================

  const presentation = SlidesApp.getActivePresentation();
  const pageHeight = presentation.getPageHeight()

  let {
    excludeBelowTop = 0.8
  } = config

  if (excludeBelowTop) {
    excludeBelowTop = pageHeight * excludeBelowTop
  }

  // ===========================

  for (let i = sortedPlaceholders.length - 1; i >= 0; i--) {

    let {type, object} = sortedPlaceholders[i]
    
    if (type == 'SUBTITLE' && object.getTop() > excludeBelowTop) {
      let paragraphRange = object.getText()
      paragraphRange.clear()
      insertMarkdownToParagraph(paragraphRange, footer)
      return true
    }
  }

  return false
}
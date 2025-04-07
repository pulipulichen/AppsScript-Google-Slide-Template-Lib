function setPlaceholderFooter(sortedPlaceholders, footer) {
  if (!footer) {
    return false
  }

  for (let i = sortedPlaceholders.length - 1; i >= 0; i--) {

    let {type, object} = sortedPlaceholders[i]
    

    if (type == 'SUBTITLE') {
      let paragraphRange = object.getText()
      insertMarkdownToParagraph(paragraphRange, footer)
      return true
    }
  }
}
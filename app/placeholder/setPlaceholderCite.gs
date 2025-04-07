function setPlaceholderCite(sortedPlaceholders, cite) {
  if (!cite) {
    return false
  }

  for (let i = sortedPlaceholders.length - 1; i >= 0; i--) {

    let {type, object} = sortedPlaceholders[i]
    
    // Logger.log([type, object.getPageElementType()])
    if (type == 'BODY') {
      let paragraphRange = object.getText()
      insertMarkdownToParagraph(paragraphRange, cite, {
        exclude: ['link']
      })
      return true
    }
  }
}
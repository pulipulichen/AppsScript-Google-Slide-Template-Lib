function setPlaceholderCite(sortedPlaceholders, cite) {
  if (!cite) {
    return false
  }

  for (let i = sortedPlaceholders.length - 1; i >= 0; i--) {

    let {type, object} = sortedPlaceholders[i]
    
    // Logger.log([type, object.getPageElementType()])
    if (type == 'BODY') {
      let paragraphRange = object.getText()
      
      let exclude = ['link']
      if ( (cite.startsWith('https://') || cite.startsWith('http://')) && cite.length < 50 ) {
        cite = `[${cite}](${cite})`
        exclude = []
      }

      insertMarkdownToParagraph(paragraphRange, cite, {
        exclude
      })

      return true
    }
  }
}
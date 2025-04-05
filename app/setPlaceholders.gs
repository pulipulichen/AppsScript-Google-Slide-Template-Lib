function setPlaceholders(sortedPlaceholders, types, config) {
  let typesCounter = {}
    for (let i = 0; i < sortedPlaceholders.length; i++) {

      let {type, object} = sortedPlaceholders[i]
      
      if (!typesCounter[type] && typesCounter[type] !== 0) {
        typesCounter[type] = 0
      }

      if (!types[type]) {
        continue
      }

      let text = types[type][typesCounter[type]]
      if (!text) {
        continue
      }

      if (type == 'TITLE' || type == 'SUBTITLE') {
        Logger.log(`${type} | text: ${text}`)
        object.getText().setText(text);
      }
      else if (type == 'BODY') {
        if (isMarkdownPicture(text)) {
          setPlaceholderPicture(object, text)
        }
        else {
          setPlaceholderBody(object, text)
        }
      }
      else if (type == 'PICTURE') {
        object.replace(text)
      }

      typesCounter[type]++
    }
}
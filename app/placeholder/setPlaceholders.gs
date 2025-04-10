function setPlaceholders(sortedPlaceholders, types, config) {
  let typesCounter = {}

  Logger.log(types)
  for (let i = 0; i < sortedPlaceholders.length; i++) {

    let {type, object} = sortedPlaceholders[i]

    if (type.startsWith('BODY')) {
      type = 'BODY'
    }
    
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
      // Logger.log(`${type} | text: ${text}`)
      object.getText().setText(text);

      if (type === 'SUBTITLE') {
        object.getText().getParagraphStyle().setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER)
      }
    }
    else if (type.startsWith('BODY')) {
      if (isMarkdownPicture(text)) {
        setPlaceholderPicture(object, text, config)
      }
      else if (isMarkdownSmartArt(text)) {
        setPlaceholderSmartArt(object, text, config)
      }
      else if (isMarkdownCode(text)) {
        setPlaceholderCode(object, text)
      }
      else if (isMarkdownTable(text)) {
        setPlaceholderTable(object, text)
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
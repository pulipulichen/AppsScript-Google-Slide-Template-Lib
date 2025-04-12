function checkBodyNeedAlignCenter(sortedPlaceholders, types) {
  // 如果有兩個BODY，其中一個是image，那就要
  let typesCounter = {}

  let result = false

  let bodyCount = 0
  let hasImage = false

  for (let i = 0; i < sortedPlaceholders.length; i++) {

    let {type, object} = sortedPlaceholders[i]

    if (type.startsWith('BODY')) {
      type = 'BODY'
    }

    if (!typesCounter[type] && typesCounter[type] !== 0) {
      typesCounter[type] = 0
    }

    let text = types[type][typesCounter[type]]
    if (!text) {
      continue
    }
    
    // Logger.log(text)
    if (type.startsWith('BODY')) {
      if (isMarkdownPicture(text)) {
        hasImage = true
      }
      else if (isMarkdownSmartArt(text) || isMarkdownCode(text) || isMarkdownTable(text)) {
        continue
      }
      else {
        bodyCount++
      }
    }

    typesCounter[type]++
  }

  result = (bodyCount === 1 && hasImage)
  // Logger.log({result, bodyCount, hasImage})

  return result
}
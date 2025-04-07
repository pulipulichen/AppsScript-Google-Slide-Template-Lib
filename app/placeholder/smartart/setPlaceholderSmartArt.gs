function setPlaceholderSmartArt(shape, markdown) {
  if (typeof(shape.asShape) === 'function') {
    shape = shape.asShape()
  }

  let firstLine = markdown.slice(0, markdown.indexOf('\n')).trim()
  let {type, config} = parseCodeConfig(firstLine)

  Logger.log(type)

  let code = markdown.slice(markdown.indexOf('\n') + 1, markdown.lastIndexOf('\n'))
  if (type === 'smartart:hamberger') {
    setPlaceholderSmartArtHamburger(shape, code, config)
  }
  else if (type === 'smartart:column') {
    setPlaceholderSmartArtColumn(shape, code, config)
  }
  else {
    setPlaceholderSmartArtHamburger(shape, code, config)
  }
}

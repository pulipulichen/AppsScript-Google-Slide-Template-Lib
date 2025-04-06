function setPlaceholderSmartArt(shape, markdown) {
  if (typeof(shape.asShape) === 'function') {
    shape = shape.asShape()
  }

  let firstLine = markdown.slice(0, markdown.indexOf('\n')).trim()
  let {type, config} = firstLine.slice(firstLine.indexOf('`') + 1).trim()

  let code = markdown.slice(markdown.indexOf('\n') + 1, markdown.lastIndexOf('\n'))
  if (type === 'smartart:td') {
    setPlaceholderSmartArtTD(shape, code, config)
  }
  else {
    setPlaceholderSmartArtTD(shape, code, config)
  }
}

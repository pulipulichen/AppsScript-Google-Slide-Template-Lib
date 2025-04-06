function setPlaceholderCode(shape, markdown) {
  if (typeof(shape.asShape) === 'function') {
    shape = shape.asShape()
  }

  let firstLine = markdown.slice(0, markdown.indexOf('\n')).trim()
  
  // let type = firstLine.slice(firstLine.indexOf('`') + 1).trim()

  let code = markdown.slice(markdown.indexOf('\n') + 1, markdown.lastIndexOf('\n'))

  let textRange = shape.getText()
  
  textRange.setText(code)

  let textStyle = textRange.getTextStyle()
  textStyle.setFontFamily('Consolas')
  textStyle.setForegroundColor(SlidesApp.ThemeColorType.DARK1)

  let paragraphStyle = textRange.getParagraphStyle()
  paragraphStyle.setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER)

  shape.getFill().setSolidFill(SlidesApp.ThemeColorType.LIGHT1)
  let border = shape.getBorder()
  border.setWeight(parseInt(textStyle.getFontSize() / 10))
  border.setDashStyle(SlidesApp.DashStyle.SOLID)
  border.getLineFill().setSolidFill(SlidesApp.ThemeColorType.DARK1)
  shape.setContentAlignment(SlidesApp.ContentAlignment.MIDDLE)
}

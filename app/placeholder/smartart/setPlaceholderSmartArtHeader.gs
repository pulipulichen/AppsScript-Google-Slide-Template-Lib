
function setPlaceholderSmartArtHeader(fontSize, shape, text, foreground, background) {
  
  let textRange = shape.getText()
  textRange.clear()
  textRange.setText(text);

  // let baseSize = Math.min(shape.getHeight(), shape.getWidth())
  
  let textStyle = textRange.getTextStyle()
  textStyle.setFontSize(fontSize); // 可選：設字體大小

  let fill = shape.getFill()
  fill.setSolidFill(background)
  
  let border = shape.getBorder()
  border.setWeight(fontSize / 10)
  border.setDashStyle(SlidesApp.DashStyle.SOLID)
  border.getLineFill().setSolidFill(background)

  textStyle.setForegroundColor(foreground)

  let paragraphStyle = textRange.getParagraphStyle()
  paragraphStyle.setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER)
  shape.setContentAlignment(SlidesApp.ContentAlignment.MIDDLE)
}


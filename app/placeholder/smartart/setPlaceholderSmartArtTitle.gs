
function setPlaceholderSmartArtTitle(shape, text, color) {
  
  let textRange = shape.getText()
  textRange.clear()
  textRange.setText(text);

  let fontSize = shape.getHeight() / 2

  let textStyle = textRange.getTextStyle()
  textStyle.setFontSize(fontSize); // 可選：設字體大小

  textStyle.setForegroundColor(color)

  let paragraphStyle = textRange.getParagraphStyle()
  paragraphStyle.setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER)
  shape.setContentAlignment(SlidesApp.ContentAlignment.MIDDLE)
}


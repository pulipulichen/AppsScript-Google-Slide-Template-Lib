function setPlaceholderSmartArtTitle(fontSize, shape, text, color) {
  
  let textRange = shape.getText()
  textRange.clear()
  textRange.setText(text);

  // let baseSize = Math.min(shape.getHeight(), shape.getWidth())
  // let fontSize = baseSize / 2
  // let fontSize
  // if (shape.getHeight() > shape.getWidth()) {
  //   fontSize = shape.getWidth() / 4
  // }
  // else {
  //   fontSize = shape.getHeight() / 2
  // }

  let textStyle = textRange.getTextStyle()
  textStyle.setFontSize(fontSize); // 可選：設字體大小

  textStyle.setForegroundColor(color)

  let paragraphStyle = textRange.getParagraphStyle()
  paragraphStyle.setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER)
  shape.setContentAlignment(SlidesApp.ContentAlignment.MIDDLE)
}


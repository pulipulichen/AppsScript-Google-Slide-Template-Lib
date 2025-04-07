function setPlaceholderSmartArtTextCenter(fontSize, shape, text, color) {
  
  let lines = text.trim().split('\n')
  let linesCount = lines.length

  // let baseSize = Math.min(shape.getHeight(), shape.getWidth())
  // if (linesCount == 2) {
  //   fontSize = fontSize / 1.5
  // }
  // else if (linesCount > 2) {
  //   fontSize = fontSize / 2
  // }
  fontSize = fontSize / 1.5

  let textRange = shape.getText()
  textRange.clear()

  for (let i = 0; i < linesCount; i++) {
    let line = lines[i]
    if (i === 0) {
      textRange.setText(line)
      continue
    }

    textRange.appendParagraph(line)
  }
  
  if (linesCount > 1) {
    textRange.getListStyle().applyListPreset(SlidesApp.ListPreset.DISC_CIRCLE_SQUARE);
  }

  
  let textStyle = textRange.getTextStyle()
  textStyle.setFontSize(fontSize); // 可選：設字體大小

  textStyle.setForegroundColor(color)

  let paragraphStyle = textRange.getParagraphStyle()
  paragraphStyle.setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER)
  shape.setContentAlignment(SlidesApp.ContentAlignment.MIDDLE)

}

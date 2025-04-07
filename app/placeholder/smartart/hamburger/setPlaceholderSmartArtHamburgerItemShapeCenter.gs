
function setPlaceholderSmartArtHamburgerItemShapeCenter(slide, itemShape, progress, i, text, colorConfig, layoutConfig) {
  let {foreground, background} = getColor(progress, colorConfig)

  let textRange = itemShape.getText()
  textRange.clear()
  textRange.setText(text);

  let fontSize = setPlaceholderSmartArtHamburgerFontSize(itemShape)

  let textStyle = textRange.getTextStyle()
  textStyle.setFontSize(fontSize); // 可選：設字體大小

  let fill = itemShape.getFill()
  fill.setSolidFill(background)
  
  let border = itemShape.getBorder()
  border.setWeight(fontSize / 10)
  border.setDashStyle(SlidesApp.DashStyle.SOLID)
  border.getLineFill().setSolidFill(foreground)
  textStyle.setForegroundColor(foreground)

  let paragraphStyle = textRange.getParagraphStyle()
  paragraphStyle.setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER)    

  if (layoutConfig.arrow === true && progress < 1) {
    let arrowShape = setPlaceholderSmartArtArrowBelow(fontSize, slide, itemShape)
    let subgroup = slide.group([itemShape, arrowShape])
    subgroup.sendToBack()
  }
  else {
    itemShape.sendToBack()
  }
}
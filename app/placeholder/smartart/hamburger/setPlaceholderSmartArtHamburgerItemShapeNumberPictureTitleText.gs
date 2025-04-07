function setPlaceholderSmartArtHamburgerItemShapeNumberPictureTitleText(slide, itemShape, progress, i, picture, title, subtitle, colorConfig, layoutConfig, titleLength) {
  let {foreground, background} = getColor(progress, colorConfig)

  setPlaceholderSmartArtContainer(itemShape, foreground, background)  

  let group = []
  
  let fontSize = setPlaceholderSmartArtHamburgerFontSize(itemShape)
  let baseSize = Math.min(itemShape.getHeight(), itemShape.getWidth())
  let borderWidth = (fontSize / 10)

  // ==================
  
  let itemShapeGroup = buildSmartArtRowArrow(fontSize, slide, itemShape, layoutConfig, progress)
  group.push(itemShapeGroup)

  // ==================
  
  let baseLeft = itemShape.getLeft()
  
  // border.setDashStyle(SlidesApp.DashStyle.SOLID)
  // border.getLineFill().setSolidFill(foreground)

  // let fontSize = getFontSizeFromShape(itemShape)
  // let numberShapeWidth = itemShape.getHeight()
  

  // ====================
  
  let pictureShape = buildSmartArtRowPicture(baseLeft, baseSize, fontSize, itemShape, slide, background)
  group.push(pictureShape)

  baseSize = baseLeft - (borderWidth / 2) + pictureSize


  // =============================

  let numberShape = buildSmartArtRowNumber(baseLeft, slide, itemShape, fontSize, i, foreground, background)
  group.push(numberShape)
  baseLeft = baseLeft + numberShape.getWidth()

  // =============================

  // =========================
    
  let titleShape = buildSmartArtRowTitle(baseLeft, baseSize, slide, itemShape, fontSize, background, titleLength)
  group.push(titleShape)
  baseLeft = baseLeft + titleShape.getWidth()

  // =============================

  let textShape = buildSmartArtRowText(baseLeft, baseSize, slide, fontSize, subtitle, itemShape, colorConfig)
  group.push(textShape)

  // ===========================

  slide.group(group).sendToBack()
}
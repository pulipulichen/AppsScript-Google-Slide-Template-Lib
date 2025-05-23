function setPlaceholderSmartArtHamburgerItemShapePictureHeaderText(slide, itemShape, progress, picture, title, subtitle, colorConfig, layoutConfig, titleLength) {
  let {foreground, background} = getColor(progress, colorConfig)

  setPlaceholderSmartArtContainer(itemShape, foreground, background)  

  let group = []
  
  let fontSize = setPlaceholderSmartArtHamburgerFontSize(itemShape)
  let baseSize = Math.min(itemShape.getHeight(), itemShape.getWidth())
  let borderWidth = (fontSize / 10)

  // ==============

  let itemShapeGroup = buildSmartArtRowArrow(fontSize, slide, itemShape, layoutConfig, progress)
  group.push(itemShapeGroup)

  let baseLeft = itemShape.getLeft()

  // =========================
  
  let pictureShape = buildSmartArtRowPicture(baseLeft, baseSize, fontSize, itemShape, slide, background)
  group.push(pictureShape)

  baseSize = baseLeft - (borderWidth / 2) + pictureSize

  // =============================

  let headerShape = buildSmartArtRowHeader(baseLeft, baseSize, fontSize, titleLength, slide, itemShape, title, foreground, background)
  group.push(headerShape)

  baseLeft = baseLeft + headerShape.getWidth()

  // =============================

  let textShape = buildSmartArtRowText(baseLeft, baseSize, slide, fontSize, subtitle, itemShape, colorConfig)
  group.push(textShape)

  // ===============================

  slide.group(group).sendToBack()
}
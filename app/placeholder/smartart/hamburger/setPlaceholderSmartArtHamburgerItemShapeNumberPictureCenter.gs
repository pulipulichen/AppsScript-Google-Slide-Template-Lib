function setPlaceholderSmartArtHamburgerItemShapeNumberPictureCenter(slide, itemShape, progress, i, picture, text, colorConfig, layoutConfig) {
  let {foreground, background} = getColor(progress, colorConfig)

  setPlaceholderSmartArtContainer(itemShape, foreground, background)  

  let group = []

  group.push(itemShape)
  
  let fontSize = setPlaceholderSmartArtHamburgerFontSize(itemShape)
  let baseSize = Math.min(itemShape.getHeight(), itemShape.getWidth())
  let borderWidth = (fontSize / 10)
  
  let baseLeft = itemShape.getLeft()

  // ============================

  let pictureShape = buildSmartArtRowPicture(baseLeft, baseSize, fontSize, itemShape, slide, background)
  group.push(pictureShape)

  baseSize = baseLeft - (borderWidth / 2) + pictureSize

  // =============================

  let numberShape = buildSmartArtRowNumber(baseLeft, slide, itemShape, fontSize, i, foreground, background)
  group.push(numberShape)
  baseLeft = baseLeft + numberShape.getWidth()

  // =============================

  // Logger.log([itemShape.getWidth(), itemShape.getHeight()])

  let titleShape = buildSmartArtRowTitleLast(baseLeft, fontSize, slide, itemShape, text, background)

  let subgroup = buildSmartArtRowArrow(fontSize, slide, titleShape, layoutConfig, progress)
  group.push(subgroup)

  slide.group(group).sendToBack()
}
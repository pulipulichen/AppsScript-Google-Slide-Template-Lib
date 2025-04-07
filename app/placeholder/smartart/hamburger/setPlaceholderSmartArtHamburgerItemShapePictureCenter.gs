function setPlaceholderSmartArtHamburgerItemShapePictureCenter(slide, itemShape, progress, picture, text, colorConfig, layoutConfig) {
  let {foreground, background} = getColor(progress, colorConfig)

  setPlaceholderSmartArtContainer(itemShape, foreground, background)  

  let group = []

  group.push(itemShape)

  let fontSize = setPlaceholderSmartArtHamburgerFontSize(itemShape)
  let baseSize = Math.min(itemShape.getHeight(), itemShape.getWidth())
  let borderWidth = (fontSize / 10)

  // ====================
  
  let pictureShape = buildSmartArtRowPicture(baseLeft, baseSize, fontSize, itemShape, slide, background)
  group.push(pictureShape)

  baseSize = baseLeft - (borderWidth / 2) + pictureSize

  // =============================

  let titleShape = buildSmartArtRowTitleLast(baseLeft, fontSize, slide, itemShape, text, background)

  let subgroup = buildSmartArtRowArrow(fontSize, slide, titleShape, layoutConfig, progress)
  group.push(subgroup)

  // =============================

  slide.group(group).sendToBack()
}
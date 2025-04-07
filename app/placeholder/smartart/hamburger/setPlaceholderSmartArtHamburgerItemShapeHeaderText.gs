function setPlaceholderSmartArtHamburgerItemShapeHeaderText(slide, itemShape, progress, i, title, subtitle, colorConfig, layoutConfig, titleLength) {
  let {foreground, background} = getColor(progress, colorConfig)

  setPlaceholderSmartArtContainer(itemShape, foreground, background, layoutConfig)
  
  let fontSize = setPlaceholderSmartArtHamburgerFontSize(itemShape)
  let baseSize = Math.min(itemShape.getHeight(), itemShape.getWidth())
  
  let group = []

  // =============

  let itemShapeGroup = buildSmartArtRowArrow(fontSize, slide, itemShape, layoutConfig, progress)
  group.push(itemShapeGroup)

  // =============================

  let baseLeft = itemShape.getLeft()

  let headerShape = buildSmartArtRowHeader(baseLeft, baseSize, fontSize, titleLength, slide, itemShape, title, foreground, background)
  group.push(headerShape)

  baseLeft = baseLeft + headerShape.getWidth()

  // =============================

  let textShape = buildSmartArtRowText(baseLeft, baseSize, slide, fontSize, subtitle, itemShape, colorConfig)
  group.push(textShape)

  slide.group(group).sendToBack()

}
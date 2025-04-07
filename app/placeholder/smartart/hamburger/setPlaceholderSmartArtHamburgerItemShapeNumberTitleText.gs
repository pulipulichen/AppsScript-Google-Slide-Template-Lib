function setPlaceholderSmartArtHamburgerItemShapeNumberTitleText(slide, itemShape, progress, i, title, subtitle, colorConfig, layoutConfig, titleLength) {
  let {foreground, background} = getColor(progress, colorConfig)

  setPlaceholderSmartArtContainer(itemShape, foreground, background, layoutConfig)
  
  let group = []
  let fontSize = setPlaceholderSmartArtHamburgerFontSize(itemShape)
  let baseSize = Math.min(itemShape.getHeight(), itemShape.getWidth())
  
  // ==============

  let itemShapeGroup = buildSmartArtRowArrow(fontSize, slide, itemShape, layoutConfig, progress)
  group.push(itemShapeGroup)

  let baseLeft = itemShape.getLeft()

  // =========================

  let numberShape = buildSmartArtRowNumber(baseLeft, slide, itemShape, fontSize, i, foreground, background)
  group.push(numberShape)
  baseLeft = baseLeft + numberShape.getWidth()

  // =========================
  
  let titleShape = buildSmartArtRowTitle(baseLeft, baseSize, slide, itemShape, fontSize, background, titleLength)
  group.push(titleShape)
  baseLeft = baseLeft + titleShape.getWidth()

  // =============================

  let textShape = buildSmartArtRowText(baseLeft, baseSize, slide, fontSize, subtitle, itemShape, colorConfig)
  group.push(textShape)

  slide.group(group).sendToBack()

}


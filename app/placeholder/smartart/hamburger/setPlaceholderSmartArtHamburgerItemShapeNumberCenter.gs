function setPlaceholderSmartArtHamburgerItemShapeNumberCenter(slide, itemShape, progress, i, text, colorConfig, layoutConfig) {
  let {foreground, background} = getColor(progress, colorConfig)

  setPlaceholderSmartArtContainer(itemShape, foreground, background)  

  let fontSize = setPlaceholderSmartArtHamburgerFontSize(itemShape)
  let group = []

  group.push(itemShape)
  
  // =========================

  let baseLeft = itemShape.getLeft()

  // ==========================

  let numberShape = buildSmartArtRowNumber(baseLeft, slide, itemShape, fontSize, i, foreground, background)
  group.push(numberShape)
  baseLeft = baseLeft + numberShape.getWidth()

  // =============================

  let titleShape = buildSmartArtRowTitleLast(baseLeft, fontSize, slide, itemShape, text, background)

  let subgroup = buildSmartArtRowArrow(fontSize, slide, titleShape, layoutConfig, progress)
  group.push(subgroup)

  slide.group(group).sendToBack()
}
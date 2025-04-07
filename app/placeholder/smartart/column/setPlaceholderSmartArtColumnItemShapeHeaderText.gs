function setPlaceholderSmartArtColumnItemShapeHeaderText(slide, itemShape, progress, i, title, subtitle, colorConfig, layoutConfig, titleLength) {
  let {foreground, background} = getColor(progress, colorConfig)

  setPlaceholderSmartArtContainer(itemShape, foreground, background, layoutConfig)
  
  let fontSize = setPlaceholderSmartArtHamburgerFontSize(itemShape)
  let baseSize = Math.min(itemShape.getHeight(), itemShape.getWidth())
  
  let group = []
  let baseTop = itemShape.getTop()

  // =============

  if (layoutConfig.arrow === false) {
    group.push(itemShape)
  }
  else if (progress !== 1) {
    let arrowShape = setPlaceholderSmartArtArrowRight(fontSize, slide, itemShape)
    let subgroup = slide.group([itemShape, arrowShape])
    subgroup.sendToBack()
    group.push(subgroup)
  }
  else {
    itemShape.sendToBack()
    group.push(itemShape)
  }

  // =================

  let headerShape = buildPlaceholderSmartArtColumnHeaderShape(slide, baseSize, baseTop, itemShape, fontSize, title, foreground, background)
  group.push(headerShape)
  baseTop = baseTop + headerShape.getHeight()

  // =============================

  // Logger.log([itemShape.getWidth(), itemShape.getHeight()])

  let textShape = slide.insertShape(
    SlidesApp.ShapeType.TEXT_BOX,
    itemShape.getLeft(),
    baseTop,
    itemShape.getWidth(),
    itemShape.getHeight() - baseTop + itemShape.getTop()
  )

  let textColor = '#000000'
  if (colorConfig.invert === false) {
    textColor = '#FFFFFF'
  }

  setPlaceholderSmartArtTextCenter(fontSize, textShape, subtitle, textColor)
  group.push(textShape)

  slide.group(group).sendToBack()

}


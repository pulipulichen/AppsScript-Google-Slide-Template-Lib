function setPlaceholderSmartArtColumnItemShapeNumberHeaderText(slide, itemShape, progress, i, title, subtitle, colorConfig, layoutConfig, titleLength) {
  let {foreground, background} = getColor(progress, colorConfig)

  setPlaceholderSmartArtContainer(itemShape, foreground, background, layoutConfig)
  
  let group = []
  let fontSize = setPlaceholderSmartArtColumnFontSize(itemShape)
  let baseSize = Math.min(itemShape.getHeight(), itemShape.getWidth())
  
  let baseTop = itemShape.getTop()

  // ==============

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

  // =========================

  let numberShapeHeight = baseSize / 3
  
  let numberShape = slide.insertShape(
    SlidesApp.ShapeType.RECTANGLE,
    itemShape.getLeft(),
    baseTop,
    itemShape.getWidth(),
    numberShapeHeight
  )

  setPlaceholderSmartArtHeader(fontSize, numberShape, (i + 1), foreground, background)  
  group.push(numberShape)
  baseTop = baseTop + numberShapeHeight

  // =========================
    
  let headerShapeHeightMargin = (baseSize / 4)
  let headerShapeHeight = headerShapeHeightMargin * 2

  let titleShape = slide.insertShape(
    SlidesApp.ShapeType.TEXT_BOX,
    itemShape.getLeft(),
    baseTop,
    itemShape.getWidth(),
    headerShapeHeight
  )

  setPlaceholderSmartArtTitle(fontSize, titleShape, title, background)
  group.push(titleShape)
  baseTop = baseTop + headerShapeHeight

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


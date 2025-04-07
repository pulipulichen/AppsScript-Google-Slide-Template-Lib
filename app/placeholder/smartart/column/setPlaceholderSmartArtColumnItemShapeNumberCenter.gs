function setPlaceholderSmartArtColumnItemShapeNumberCenter(slide, itemShape, progress, i, text, colorConfig, layoutConfig) {
  let {foreground, background} = getColor(progress, colorConfig)

  setPlaceholderSmartArtContainer(itemShape, foreground, background)  

  let fontSize = setPlaceholderSmartArtColumnFontSize(itemShape)
  let baseSize = Math.min(itemShape.getHeight(), itemShape.getWidth())

  let group = []

  group.push(itemShape)

  let baseTop = itemShape.getTop()
  // =======================
  
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

  // =============================

  // Logger.log([itemShape.getWidth(), itemShape.getHeight()])

  let titleShape = slide.insertShape(
    SlidesApp.ShapeType.TEXT_BOX,
    itemShape.getLeft(),
    baseTop,
    itemShape.getWidth(),
    itemShape.getHeight() - baseTop + itemShape.getTop()
  )

  setPlaceholderSmartArtTitle(fontSize, titleShape, text, background)
  
  if (layoutConfig.arrow === false || progress === 1) {
    group.push(titleShape)
  }
  else if (progress !== 1) {
    let arrowShape = setPlaceholderSmartArtArrowRight(fontSize, slide, titleShape)
    let subgroup = slide.group([titleShape, arrowShape])
    group.push(subgroup) 
  }

  slide.group(group).sendToBack()
}
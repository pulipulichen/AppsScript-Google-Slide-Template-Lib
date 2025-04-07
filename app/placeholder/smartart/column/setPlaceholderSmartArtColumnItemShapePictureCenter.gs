function setPlaceholderSmartArtColumnItemShapePictureCenter(slide, itemShape, progress, picture, text, colorConfig, layoutConfig) {
  let {foreground, background} = getColor(progress, colorConfig)

  setPlaceholderSmartArtContainer(itemShape, foreground, background)  

  let group = []
  let fontSize = setPlaceholderSmartArtColumnFontSize(itemShape)

  // ==========================================

  if (layoutConfig.arrow === false || progress === 1) {
    group.push(itemShape)
  }
  else if (progress !== 1) {
    let arrowShape = setPlaceholderSmartArtArrowRight(fontSize, slide, itemShape)
    let subgroup = slide.group([itemShape, arrowShape])
    group.push(subgroup) 
  }

  // ============================================
  
  // border.setDashStyle(SlidesApp.DashStyle.SOLID)
  // border.getLineFill().setSolidFill(foreground)

  // let fontSize = getFontSizeFromShape(itemShape)
  // let numberShapeWidth = itemShape.getHeight()
  
  let baseTop = itemShape.getTop()

  // ==============================

  

  let baseSize = Math.min(itemShape.getHeight(), itemShape.getWidth())

  let borderWidth = (fontSize / 10)
  let pictureSize = baseSize + (borderWidth)

  let pictureShape = slide.insertShape(
    SlidesApp.ShapeType.RECTANGLE,
    itemShape.getLeft() - (borderWidth / 2),
    baseTop - (borderWidth / 2),
    pictureSize,
    pictureSize
  )

  // setPlaceholderSmartArtHeader(numberShape, '', foreground, background) 
  pictureShape = setPlaceholderSmartArtPicture(pictureShape, picture, background) 

  group.push(pictureShape)
  baseTop = baseTop - (borderWidth / 2) + pictureSize

  // =============================

  // Logger.log([itemShape.getWidth(), itemShape.getHeight()])

  let titleShape = slide.insertShape(
    SlidesApp.ShapeType.TEXT_BOX,
    itemShape.getLeft(),
    baseTop,
    itemShape.getWidth(),
    itemShape.getHeight() - baseTop + itemShape.getTop(),
  )

  setPlaceholderSmartArtTitle(fontSize, titleShape, text, background)
  group.push(titleShape)
  
  slide.group(group).sendToBack()
}
function setPlaceholderSmartArtColumnItemShapePictureHeaderText(slide, itemShape, progress, picture, title, subtitle, colorConfig, layoutConfig, titleLength) {
  let {foreground, background} = getColor(progress, colorConfig)

  setPlaceholderSmartArtContainer(itemShape, foreground, background)  

  let group = []
  let fontSize = setPlaceholderSmartArtColumnFontSize(itemShape)
  let baseSize = Math.min(itemShape.getHeight(), itemShape.getWidth())

  // ==================
  
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

  // ==================
  
  let baseTop = itemShape.getTop()
  
  // border.setDashStyle(SlidesApp.DashStyle.SOLID)
  // border.getLineFill().setSolidFill(foreground)

  // let fontSize = getFontSizeFromShape(itemShape)
  // let numberShapeWidth = itemShape.getHeight()
  
  let borderWidth = (fontSize / 10)
  let pictureSize = baseSize + (borderWidth)


  baseTop = baseTop - (borderWidth / 2)
  let pictureShape = slide.insertShape(
    SlidesApp.ShapeType.RECTANGLE,
    itemShape.getLeft() - (borderWidth / 2),
    baseTop,
    pictureSize,
    pictureSize
  )

  // setPlaceholderSmartArtHeader(numberShape, '', foreground, background) 
  pictureShape = setPlaceholderSmartArtPicture(pictureShape, picture, background) 

  baseTop = baseTop + pictureSize
  group.push(pictureShape)

  // =============================
    
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

  // ===========================

  slide.group(group).sendToBack()
}
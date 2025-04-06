function setPlaceholderSmartArtHamburgerItemShapeNumberPictureHeaderText(slide, itemShape, progress, i, picture, title, subtitle, colorConfig, layoutConfig, titleLength) {
  let {foreground, background} = getColor(progress, colorConfig)

  setPlaceholderSmartArtContainer(itemShape, foreground, background)  

  let group = []

  // ==================
  
  if (layoutConfig.arrow === false) {
    group.push(itemShape)
  }
  else if (progress !== 1) {
    let arrowShape = setPlaceholderSmartArtArrowBelow(slide, itemShape)
    let subgroup = slide.group([itemShape, arrowShape])
    subgroup.sendToBack()
    group.push(subgroup)
  }
  else {
    itemShape.sendToBack()
    group.push(itemShape)
  }

  // ==================
  
  let baseLeft = itemShape.getLeft()
  
  // border.setDashStyle(SlidesApp.DashStyle.SOLID)
  // border.getLineFill().setSolidFill(foreground)

  // let fontSize = getFontSizeFromShape(itemShape)
  // let numberShapeWidth = itemShape.getHeight()
  
  let fontSize = itemShape.getHeight() / 2
  let borderWidth = (fontSize / 10)
  let pictureSize = itemShape.getHeight() + (borderWidth)


  let pictureShape = slide.insertShape(
    SlidesApp.ShapeType.RECTANGLE,
    itemShape.getLeft() - (borderWidth / 2),
    itemShape.getTop() - (borderWidth / 2),
    pictureSize,
    pictureSize
  )

  // setPlaceholderSmartArtHeader(numberShape, '', foreground, background) 
  pictureShape = setPlaceholderSmartArtPicture(pictureShape, picture, background) 

  baseLeft = itemShape.getLeft() - (borderWidth / 2) + pictureSize
  group.push(pictureShape)


  // =============================

  let numberShape = slide.insertShape(
    SlidesApp.ShapeType.RECTANGLE,
    baseLeft,
    itemShape.getTop(),
    itemShape.getHeight(),
    itemShape.getHeight()
  )

  setPlaceholderSmartArtHeader(numberShape, (i + 1), foreground, background)  

  baseLeft = baseLeft + itemShape.getHeight()
  group.push(numberShape)

  // =============================

  // =========================
    
  let headerShapeWidthMargin = (itemShape.getHeight() / 2)
  let headerShapeWidth = headerShapeWidthMargin * (titleLength + 1)

  let titleShape = slide.insertShape(
    SlidesApp.ShapeType.TEXT_BOX,
    baseLeft,
    itemShape.getTop(),
    headerShapeWidth,
    itemShape.getHeight()
  )

  setPlaceholderSmartArtTitle(titleShape, title, background)
  baseLeft = baseLeft + headerShapeWidth
  group.push(titleShape)

  // =============================

  // Logger.log([itemShape.getWidth(), itemShape.getHeight()])

  let textShape = slide.insertShape(
    SlidesApp.ShapeType.TEXT_BOX,
    baseLeft + headerShapeWidthMargin,
    itemShape.getTop(),
    itemShape.getWidth() - headerShapeWidthMargin - baseLeft,
    itemShape.getHeight()
  )

  let textColor = '#000000'
  if (colorConfig.invert === false) {
    textColor = '#FFFFFF'
  }

  setPlaceholderSmartArtText(textShape, subtitle, textColor)
  group.push(textShape)

  // ===========================

  slide.group(group).sendToBack()
}
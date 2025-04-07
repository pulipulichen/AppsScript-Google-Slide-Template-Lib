function setPlaceholderSmartArtHamburgerItemShapeNumberPictureCenter(slide, itemShape, progress, i, picture, text, colorConfig, layoutConfig) {
  let {foreground, background} = getColor(progress, colorConfig)

  setPlaceholderSmartArtContainer(itemShape, foreground, background)  

  let group = []

  group.push(itemShape)
  
  
  // border.setDashStyle(SlidesApp.DashStyle.SOLID)
  // border.getLineFill().setSolidFill(foreground)

  // let fontSize = getFontSizeFromShape(itemShape)
  // let numberShapeWidth = itemShape.getHeight()
  
  let fontSize = setPlaceholderSmartArtHamburgerFontSize(itemShape.getHeight())


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

  group.push(pictureShape)


  // =============================

  let numberShape = slide.insertShape(
    SlidesApp.ShapeType.RECTANGLE,
    itemShape.getLeft() - (borderWidth / 2) + pictureSize,
    itemShape.getTop(),
    itemShape.getHeight(),
    itemShape.getHeight()
  )

  setPlaceholderSmartArtHeader(fontSize, numberShape, (i + 1), foreground, background)  
  group.push(numberShape)

  // =============================

  // Logger.log([itemShape.getWidth(), itemShape.getHeight()])

  let titleShape = slide.insertShape(
    SlidesApp.ShapeType.TEXT_BOX,
    itemShape.getLeft() - (borderWidth / 2) + pictureSize + itemShape.getHeight(),
    itemShape.getTop(),
    itemShape.getWidth() - itemShape.getHeight() - pictureSize - (borderWidth / 4),
    itemShape.getHeight()
  )

  setPlaceholderSmartArtTitle(fontSize, titleShape, text, background)
  
  if (layoutConfig.arrow === false || progress === 1) {
    group.push(titleShape)
  }
  else if (progress !== 1) {
    let arrowShape = setPlaceholderSmartArtArrowBelow(fontSize, slide, titleShape)
    let subgroup = slide.group([titleShape, arrowShape])
    group.push(subgroup) 
  }

  slide.group(group).sendToBack()
}
function setPlaceholderSmartArtHamburgerItemShapePictureCenter(slide, itemShape, progress, picture, text, colorConfig, layoutConfig) {
  let {foreground, background} = getColor(progress, colorConfig)

  setPlaceholderSmartArtContainer(itemShape, foreground, background)  

  let group = []

  group.push(itemShape)
  
  
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

  group.push(pictureShape)

  // =============================

  // Logger.log([itemShape.getWidth(), itemShape.getHeight()])

  let titleShape = slide.insertShape(
    SlidesApp.ShapeType.TEXT_BOX,
    itemShape.getLeft() + itemShape.getHeight(),
    itemShape.getTop(),
    itemShape.getWidth() - itemShape.getHeight(),
    itemShape.getHeight()
  )

  setPlaceholderSmartArtTitle(titleShape, text, background)
  
  if (layoutConfig.arrow === false || progress === 1) {
    group.push(titleShape)
  }
  else if (progress !== 1) {
    let arrowShape = setPlaceholderSmartArtArrowBelow(slide, titleShape)
    let subgroup = slide.group([titleShape, arrowShape])
    group.push(subgroup) 
  }

  slide.group(group).sendToBack()
}
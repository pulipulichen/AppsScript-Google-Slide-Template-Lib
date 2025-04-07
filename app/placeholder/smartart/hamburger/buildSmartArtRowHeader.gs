function buildSmartArtRowHeader(baseLeft, baseSize, fontSize, titleLength, slide, itemShape, title, foreground, background) {
  Logger.log({baseLeft, baseSize, fontSize, titleLength})

  baseSize = baseSize / 2

  let headerShapeWidthMargin = (baseSize / 2)
  let headerShapeWidth = headerShapeWidthMargin * (titleLength + 2)

  if (headerShapeWidth > itemShape.getWidth() / 3) {
    headerShapeWidth = itemShape.getWidth() / 3
    fontSize = fontSize * 0.75
  }

  let headerShape = slide.insertShape(
    SlidesApp.ShapeType.RECTANGLE,
    baseLeft,
    itemShape.getTop(),
    headerShapeWidth,
    itemShape.getHeight()
  )

  setPlaceholderSmartArtHeader(fontSize, headerShape, title, foreground, background)  

  return headerShape
}
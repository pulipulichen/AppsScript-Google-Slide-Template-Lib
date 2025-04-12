function buildSmartArtRowTitle(baseLeft, baseSize, slide, itemShape, fontSize, background, titleLength,title) {
  let headerShapeWidthMargin = (baseSize / 2)
  let headerShapeWidth = headerShapeWidthMargin * (titleLength + 1)

  let titleShape = slide.insertShape(
    SlidesApp.ShapeType.TEXT_BOX,
    baseLeft,
    itemShape.getTop(),
    headerShapeWidth,
    itemShape.getHeight()
  )

  setPlaceholderSmartArtTitle(fontSize, titleShape, title, background)

  return titleShape
}
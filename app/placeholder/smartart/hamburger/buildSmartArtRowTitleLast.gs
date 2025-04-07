function buildSmartArtRowTitleLast(baseLeft, fontSize, slide, itemShape, text, background) {

  // Logger.log([itemShape.getWidth(), itemShape.getHeight()])

  let titleShape = slide.insertShape(
    SlidesApp.ShapeType.TEXT_BOX,
    baseLeft,
    itemShape.getTop(),
    itemShape.getWidth() - baseLeft + itemShape.getLeft(),
    itemShape.getHeight()
  )

  setPlaceholderSmartArtTitle(fontSize, titleShape, text, background)

  return titleShape
}
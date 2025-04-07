function buildSmartArtRowNumber(baseLeft, slide, itemShape, fontSize, i, foreground, background) {
  let numberShape = slide.insertShape(
    SlidesApp.ShapeType.RECTANGLE,
    baseLeft,
    itemShape.getTop(),
    itemShape.getHeight(),
    itemShape.getHeight()
  )

  setPlaceholderSmartArtHeader(fontSize, numberShape, (i + 1), foreground, background)  

  return numberShape
}
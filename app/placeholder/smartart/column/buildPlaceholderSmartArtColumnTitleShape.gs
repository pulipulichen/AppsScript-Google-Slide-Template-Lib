function buildPlaceholderSmartArtColumnTitleShape(baseSize, baseTop, itemShape, fontSize, text, foreground, background) {
  let headerShapeHeight = baseSize

  let headerShape = slide.insertShape(
    SlidesApp.ShapeType.TEXT_BOX,
    itemShape.getLeft(),
    baseTop,
    itemShape.getWidth(),
    headerShapeHeight
  )

  setPlaceholderSmartArtTitle(fontSize, headerShape, text, foreground, background)  

  return headerShape
}
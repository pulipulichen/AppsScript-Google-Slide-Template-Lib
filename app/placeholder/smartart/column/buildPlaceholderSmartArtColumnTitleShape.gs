function buildPlaceholderSmartArtColumnTitleShape(slide, baseSize, baseTop, itemShape, fontSize, text, foreground, background) {
  let headerShapeHeight = baseSize

  let headerShape = slide.insertShape(
    SlidesApp.ShapeType.TEXT_BOX,
    itemShape.getLeft(),
    baseTop,
    itemShape.getWidth(),
    headerShapeHeight
  )

  Logger.log({foreground, background})
  setPlaceholderSmartArtTitle(fontSize, headerShape, text, background, foreground)  

  return headerShape
}
function buildSmartArtRowText(baseLeft, baseSize, slide, fontSize, subtitle, itemShape, colorConfig) {
  let headerShapeWidthMargin = (baseSize / 4)

  baseLeft = baseLeft + headerShapeWidthMargin + headerShapeWidthMargin

  let textShape = slide.insertShape(
    SlidesApp.ShapeType.TEXT_BOX,
    baseLeft,
    itemShape.getTop(),
    itemShape.getWidth() - baseLeft + itemShape.getLeft(),
    itemShape.getHeight()
  )

  let textColor = '#000000'
  if (colorConfig.invert === false) {
    textColor = '#FFFFFF'
  }

  fontSize = fontSize / 2

  setPlaceholderSmartArtText(fontSize, textShape, subtitle, textColor)

  return textShape
}
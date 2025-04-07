function buildSmartArtRowPicture(baseLeft, baseSize, fontSize, itemShape, slide, background) {
  let borderWidth = (fontSize / 10)
  let pictureSize = itemShape.getHeight() + (borderWidth)

  baseSize = baseLeft - (borderWidth / 2)

  let pictureShape = slide.insertShape(
    SlidesApp.ShapeType.RECTANGLE,
    baseSize,
    itemShape.getTop() - (borderWidth / 2),
    pictureSize,
    pictureSize
  )

  // setPlaceholderSmartArtHeader(numberShape, '', foreground, background) 
  pictureShape = setPlaceholderSmartArtPicture(pictureShape, picture, background) 

  return pictureShape
}
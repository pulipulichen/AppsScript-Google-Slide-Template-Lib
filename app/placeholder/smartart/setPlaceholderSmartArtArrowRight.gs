function setPlaceholderSmartArtArrowRight(slide, itemShape, color) {
  
  if (!color) {
    color = SlidesApp.ThemeColorType.DARK2
  }

  itemShape.sendToBack()

  let baseSize = Math.min(itemShape.getWidth(), itemShape.getHeight())

  let fontSize = baseSize / 2
  let arrowSize = baseSize / 1.5
  
  // let arrowLeft = itemShape.getLeft() + itemShape.getWidth() - (arrowSize / 2) + (fontSize / 5)
  let arrowLeft = itemShape.getLeft() + itemShape.getWidth() - (arrowSize / 2) + (fontSize / 10)
  let arrowTop = itemShape.getTop() + (itemShape.getHeight() / 2) - (arrowSize / 2)

  let arrowShape = slide.insertShape(
    SlidesApp.ShapeType.HALF_FRAME,
    arrowLeft,
    arrowTop,
    arrowSize,
    arrowSize,
  )

  arrowShape.setRotation(135)

  let fill = arrowShape.getFill()
  fill.setSolidFill(color)

  let border = arrowShape.getBorder()
  
  border.setWeight(fontSize / 10)
  border.setDashStyle(SlidesApp.DashStyle.SOLID)
  border.getLineFill().setSolidFill('#FFFFFF')

  return arrowShape
}

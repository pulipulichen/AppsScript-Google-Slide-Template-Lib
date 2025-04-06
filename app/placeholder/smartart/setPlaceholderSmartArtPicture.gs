function setPlaceholderSmartArtPicture(shape, picture, borderColor) {
  shape = shape.replaceWithImage(picture, true)

  // let fontSize = shape.getHeight() / 2
  let border = shape.getBorder()
  // border.setWeight(fontSize / 10)
  border.setDashStyle(SlidesApp.DashStyle.SOLID)
  border.getLineFill().setSolidFill("#FFFFFF", 0)

  return shape
}
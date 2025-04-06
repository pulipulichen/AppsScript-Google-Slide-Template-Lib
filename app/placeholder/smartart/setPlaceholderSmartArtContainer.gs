function setPlaceholderSmartArtContainer(itemShape, foreground, background) {
  itemShape.getText().clear()
  itemShape.getFill().setSolidFill(foreground)

  let fontSize = itemShape.getHeight() / 2
  let border = itemShape.getBorder()
  border.setWeight(fontSize / 10)
  border.setDashStyle(SlidesApp.DashStyle.SOLID)
  border.getLineFill().setSolidFill(background)
}
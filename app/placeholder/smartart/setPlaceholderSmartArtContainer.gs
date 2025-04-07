function setPlaceholderSmartArtContainer(itemShape, foreground, background) {
  itemShape.getText().clear()
  itemShape.getFill().setSolidFill(foreground)

  let baseSize = Math.min(itemShape.getWidth(), itemShape.getHeight())
  let fontSize = baseSize / 2
  
  if (itemShape.getHeight() > itemShape.getWidth()) {
    fontSize = fontSize / 2
  }

  let border = itemShape.getBorder()
  border.setWeight(fontSize / 10)
  border.setDashStyle(SlidesApp.DashStyle.SOLID)
  border.getLineFill().setSolidFill(background)
}
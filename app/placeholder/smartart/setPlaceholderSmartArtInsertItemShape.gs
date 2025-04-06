
function setPlaceholderSmartArtInsertItemShape(template, slide, left, top, width, height) {
  let sourceShape = getTemplatePageElement(template)
  const itemShape = slide.insertShape(sourceShape)
  itemShape.setLeft(left)
  itemShape.setTop(top)
  itemShape.setWidth(width)
  itemShape.setHeight(height)
  return itemShape
}

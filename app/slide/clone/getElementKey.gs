function getElementKey (element) {
  return [
    element.getPageElementType(),
    element.getLeft(),
    element.getTop(),
    element.getWidth(),
    element.getHeight()
  ].join(',')
}

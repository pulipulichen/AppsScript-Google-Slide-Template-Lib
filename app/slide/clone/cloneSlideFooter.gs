function cloneSlideFooter(footer, presentation, slide) {
  if (footer) {
    const elements = slide.getPageElements();

    let pageHeight = presentation.getPageHeight()

    let footerElement = elements[0]
    let leftBottomDistance = footerElement.getLeft() + (pageHeight - footerElement.getTop() - footerElement.getHeight())

    for (let i = 1; i < elements.length; i++) {
      let element = elements[i]
      if (element.getPageElementType() != 'SHAPE') {
        continue
      }

      let distance = element.getLeft() + (pageHeight - element.getTop() - element.getHeight())
      if (distance < leftBottomDistance) {
        leftBottomDistance = distance
        footerElement = element
      }
    }
    footerElement.asShape().getText().setText(footer)
  }
}
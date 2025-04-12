function checkShapePosition(shape) {
  try {
    const presentation = SlidesApp.getActivePresentation();

    const pageWidth = presentation.getPageWidth()
    const pageHeight = presentation.getPageWidth()

    // const width = shape.getWidth();
    // const height = shape.getHeight();

    const left = shape.getLeft();
    const top = shape.getTop();

    let leftHalf = (left < (pageWidth / 2))
    let upHalf = (top < (pageHeight / 2))

    return {
      left: leftHalf,
      up: upHalf,
    }
  } catch (e) {
    Logger.log(e);
    return 'Error: ' + e.message;
  }
}

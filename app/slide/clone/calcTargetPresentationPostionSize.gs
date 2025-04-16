function calcTargetPresentationPostionSize(elementObject, sourcePresentation, presentation) {
  let sourcePageHeight = sourcePresentation.getPageHeight()
  let sourcePageWidth = sourcePresentation.getPageWidth()

  // Logger.log({h: elementObject.getHeight(), w: elementObject.getWidth()})

  // 轉換成比例
  let heightRatio = elementObject.getHeight() / sourcePageHeight
  let widthRatio = elementObject.getWidth() / sourcePageWidth

  let leftRatio = elementObject.getLeft() / sourcePageWidth
  let topRatio = elementObject.getTop() / sourcePageHeight

  // Logger.log({heightRatio, widthRatio, leftRatio, topRatio, left: elementObject.getLeft(), sourcePageWidth, width: elementObject.getWidth()})

  // =================

  let pageHeight = presentation.getPageHeight()
  let pageWidth = presentation.getPageWidth()

  let targetHeight = pageHeight * heightRatio
  let targetWidth = pageWidth * widthRatio

  let targetTop = pageHeight * topRatio
  let targetLeft = pageWidth * leftRatio

  // Logger.log({pageHeight, pageWidth, sourcePageHeight, sourcePageWidth, heightRatio, widthRatio, leftRatio, topRatio, left: elementObject.getLeft(), width: elementObject.getWidth()})

  return {
    elementObject,
    targetLeft,
    targetTop,
    targetWidth,
    targetHeight
  }
}
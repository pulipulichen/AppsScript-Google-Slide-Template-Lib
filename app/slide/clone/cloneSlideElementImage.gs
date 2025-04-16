function cloneSlideElementImage(element, sourcePresentation, presentation, slide) {
  let {elementObject,
    targetLeft,
    targetTop,
    targetWidth,
    targetHeight
  } = calcTargetPresentationPostionSize(element.asImage(), sourcePresentation, presentation)
  
  let object = slide.insertImage(elementObject)

  let rotation = object.getRotation()
  if (rotation > 0 && ( Math.round(object.getWidth() / object.getHeight() * 1000 ) === Math.round(targetWidth / targetHeight * 1000) )) {

    // Logger.log({ow: object.getWidth(), oh: object.getHeight(), tw: targetWidth, th: targetHeight})
    // 不設定寬高
  }
  else {
    object.setWidth(targetWidth)
    object.setHeight(targetHeight)
  }
  object.setTop(targetTop)
  object.setLeft(targetLeft)
  // object.setWidth(targetWidth)
  // object.setHeight(targetHeight)


  let sourcePresentationRatio = sourcePresentation.getPageWidth() / sourcePresentation.getPageHeight()
  let presentationRatio = presentation.getPageWidth() / presentation.getPageHeight()

  if (sourcePresentationRatio !== presentationRatio) {
    let checkImage = slide.insertImage(object.getBlob())
    checkImage = checkImage.replace(checkImage.getBlob())

    let checkImageRatio = checkImage.getWidth() / checkImage.getHeight()
    let currentImageRatio = object.getWidth() / object.getHeight()

    if (checkImageRatio !== currentImageRatio) {
      object = object.replace(object.getBlob())
    }

    checkImage.remove()
  }

  

  return object
}
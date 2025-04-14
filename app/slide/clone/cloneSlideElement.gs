function cloneSlideElement(element, slide, sourcePresentation, presentation) {

  

  let type = element.getPageElementType()
  // Logger.log({type, isSheetChart: (type == 'SHEETS_CHART')})

  if (type == 'SHAPE') {
    let {elementObject,
      targetLeft,
      targetTop,
      targetWidth,
      targetHeight
    } = calcTargetPresentationPostionSize(element.asShape(), sourcePresentation, presentation)

    if (elementObject.getText().getAutoTexts().length > 0) {
      return false
    }

    // Logger.log({targetLeft,
    //   targetTop,
    //   targetWidth,
    //   targetHeight
    // })

    // slide.insertShape(elementObject,
    //   targetLeft,
    //   targetTop,
    //   targetWidth,
    //   targetHeight)

    let object = slide.insertShape(elementObject)
    object.setTop(targetTop)
    object.setLeft(targetLeft)
    object.setWidth(targetWidth)
    object.setHeight(targetHeight)
  }
  else if (type == 'IMAGE') {
    let {elementObject,
      targetLeft,
      targetTop,
      targetWidth,
      targetHeight
    } = calcTargetPresentationPostionSize(element.asImage(), sourcePresentation, presentation)
    
    let object = slide.insertImage(elementObject)
    object.setTop(targetTop)
    object.setLeft(targetLeft)
    object.setWidth(targetWidth)
    object.setHeight(targetHeight)

    object.replace(object.getBlob())
  }
  else if (type == 'GROUP') {
    slide.insertGroup(element.asGroup())
  }
  else if (type == 'LINE') {
    let {elementObject,
      targetLeft,
      targetTop,
      targetWidth,
      targetHeight
    } = calcTargetPresentationPostionSize(element.asLine(), sourcePresentation, presentation)

    let object = slide.insertLine(elementObject)
    object.setTop(targetTop)
    object.setLeft(targetLeft)
    object.setWidth(targetWidth)
    object.setHeight(targetHeight)
  }
  else if (type == 'SHEETS_CHART') {
    let {elementObject,
      targetLeft,
      targetTop,
      targetWidth,
      targetHeight
    } = calcTargetPresentationPostionSize(element.asSheetsChart(), sourcePresentation, presentation)
    slide.insertSheetsChart(elementObject,
      targetLeft,
      targetTop,
      targetWidth,
      targetHeight)
  }
  else if (type == 'TABLE') {
    slide.insertTable(element.asTable())
  }
  else if (type == 'VIDEO') {
    let {elementObject,
      targetLeft,
      targetTop,
      targetWidth,
      targetHeight
    } = calcTargetPresentationPostionSize(element.asVideo(), sourcePresentation, presentation)
    slide.insertVideo(elementObject,
      targetLeft,
      targetTop,
      targetWidth,
      targetHeight)
  }
  else if (type == 'WORDART') {
    slide.insertWordArt(element.asWordArt())
  }
}

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
      let content = elementObject.getText().asString()
      if (isNaN(content)) {
        return false
      }
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
    
    let rotation = object.getRotation()
    // object.setRotation(0)

    if (rotation > 0 && ( Math.round(object.getWidth() / object.getHeight() * 1000 ) === Math.round(targetWidth / targetHeight * 1000) )) {

      // Logger.log({ow: object.getWidth(), oh: object.getHeight(), tw: targetWidth, th: targetHeight})
      // 不設定寬高
    }
    else {
      object.setWidth(targetWidth)
      object.setHeight(targetHeight)
    }

      

    // object.setRotation(rotation)

    object.setTop(targetTop)
    object.setLeft(targetLeft)


    // object.setRotation(elementObject.getRotation())

    // Logger.log({rotation: elementObject.getRotation(), TRotation: object.getRotation()})
  }
  else if (type == 'IMAGE') {
    cloneSlideElementImage(element, sourcePresentation, presentation, slide)
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

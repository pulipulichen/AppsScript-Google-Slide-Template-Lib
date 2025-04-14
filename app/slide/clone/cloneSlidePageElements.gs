function cloneSlidePageElements (sourcePresentation, presentation, sourceSlide, slide, clonedElementIDList) {
  let CURRENT_ELEMENT_MAP = {}
  for (let element of slide.getPageElements()) {
    let key = getElementKey (element)
    // Logger.log({key})
    CURRENT_ELEMENT_MAP[getElementKey (element)] = element
  }

  // let sourcePageHeight = sourcePresentation.getPageHeight()
  // let sourcePageWidth = sourcePresentation.getPageWidth()

  // let pageHeight = presentation.getPageHeight()
  // let pageWidth = presentation.getPageWidth()
  

  for (let element of sourceSlide.getPageElements()) {
    // Logger.log(element.getObjectId())
    if (clonedElementIDList.includes(element.getObjectId())) {
      continue
    }

    // if (element.getTop() > topMax) {
    //   continue
    // }

    cloneSlideElement(element, slide, sourcePresentation, presentation)

    let key = getElementKey (element)
    // Logger.log({key})
    if (CURRENT_ELEMENT_MAP[key]) {
      // Logger.log('嘗試刪除 ' + CURRENT_ELEMENT_MAP[key])
      try {
        CURRENT_ELEMENT_MAP[key].remove()
      }
      catch (e) {
        Logger.log(e)
      }
    }
  }
}
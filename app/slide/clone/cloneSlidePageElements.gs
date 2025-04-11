function cloneSlidePageElements (presentation, sourceSlide, slide, clonedElementIDList) {
  let CURRENT_ELEMENT_MAP = {}
  for (let element of slide.getPageElements()) {
    let key = getElementKey (element)
    // Logger.log({key})
    CURRENT_ELEMENT_MAP[getElementKey (element)] = element
  }

  let pageHeight = presentation.getPageHeight()
  let topMax = pageHeight * 0.8

  for (let element of sourceSlide.getPageElements()) {
    if (clonedElementIDList.includes(element.getObjectId())) {
      continue
    }

    if (element.getTop() > topMax) {
      continue
    }

    cloneSlideElement(element, slide)

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
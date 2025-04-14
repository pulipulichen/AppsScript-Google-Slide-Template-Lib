function getSourceSlide(url) {
  let {
    presentationID, slideID
  } = extractPresentationAndSlideId(url)

  // Logger.log({presentationID, slideID})

  if (!presentationID || !slideID) {
    Logger.log('Error url: ' + url)
    return false
  }

  const sourcePresentation = SlidesApp.openById(presentationID);
  if (!sourcePresentation) {
    Logger.log('Slide is not found: ' + presentationID)
    return false
  }


  let sourceSlides = sourcePresentation.getSlides()
  let sourceSlide
  for (let s of sourceSlides) {
    let sID = s.getObjectId()
    // Logger.log({sID})
    if (sID === slideID) {
      sourceSlide = s
      break
    }
  }

  if (!sourceSlide) {
    Logger.log('Slide is not found: ' + sourceSlideID)
    return false
  }

  return {
    sourcePresentation,
    sourceSlide
  }
}
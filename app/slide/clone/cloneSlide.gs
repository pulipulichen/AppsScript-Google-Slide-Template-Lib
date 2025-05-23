function cloneSlide(url, footer, offset = 0, notes = null) {
  try {
    // url = 'https://docs.google.com/presentation/d/1NTCU0a5boGoZwCkdSPG1ZmrrcU3hL_A1iEcew4LvZ5w/edit#slide=id.SLIDES_API1556269895_0'

    if (!url) {
      return false
    }


    const presentation = SlidesApp.getActivePresentation()
    // const slides = presentation.getSlides()
    // const slide = slides[(slides.length - 1)]

    // let sourcePresentationID = `1NTCU0a5boGoZwCkdSPG1ZmrrcU3hL_A1iEcew4LvZ5w`
    // let sourceSlideID = 'g349d52b76eb_1_0'
    let {sourcePresentation, sourceSlide} = getSourceSlide(url)

    if (!sourceSlide) {
      return false
    }

    // =================================

    const slide = createSlideFromSourceSlide(sourceSlide, presentation, offset)

    const clonedElementIDList = cloneSlidePlaceholders(sourceSlide, slide)
    // const clonedElementIDList = []

    // ==================================

    cloneSlidePageElements (sourcePresentation, presentation, sourceSlide, slide, clonedElementIDList)

    // ====================================

    // Logger.log('2') 

    // ====================================

    cloneSlideNote(sourceSlide, slide)

    Logger.log({notes})
    setNotes(slide, notes)
    // Logger.log('3')    

    // ===================================
    
    cloneSlideFooter(footer, presentation, slide)

    // Logger.log('4')    
      
    return slide
  } catch (e) {
    Logger.log(e);
    return 'Error: ' + e.message;
  }
}

function cloneSlide(url) {
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
    let {
      presentationID, slideID
    } = extractPresentationAndSlideId(url)

    Logger.log({presentationID, slideID})

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

    // =================================

    let sourceLayout = sourceSlide.getLayout()
    let layoutName = sourceLayout.getLayoutName()
    // let sourcePageElements = sourceSlide.getPageElements()

    // =================================

    const layoutObject = findLayout(layoutName)
    const slide = presentation.appendSlide(layoutObject)

    for (let element of slide.getPageElements()) {
      element.remove()
    }

    for (let element of sourceSlide.getPageElements()) {
      cloneElement(element, slide)
    }


    // ====================================

    const notesPage = slide.getNotesPage();
    const shape = notesPage.getSpeakerNotesShape();
    shape.getText().setText(sourceSlide.getNotesPage().getSpeakerNotesShape().getText().asRenderedString());
  } catch (e) {
    Logger.log(e);
    return 'Error: ' + e.message;
  }
}

function cloneElement(element, slide) {
  let type = element.getPageElementType()
  // Logger.log({type, isSheetChart: (type == 'SHEETS_CHART')})

  if (type == 'SHAPE') {
    slide.insertShape(element.asShape())
  }
  else if (type == 'IMAGE') {
    slide.insertImage(element.asImage())
  }
  else if (type == 'GROUP') {
    slide.insertGroup(element.asGroup())
  }
  else if (type == 'LINE') {
    slide.insertLine(element.asLine())
  }
  else if (type == 'SHEETS_CHART') {
    slide.insertSheetsChart(element.asSheetsChart())
  }
  else if (type == 'TABLE') {
    slide.insertTable(element.asTable())
  }
  else if (type == 'VIDEO') {
    slide.insertVideo(element.asVideo())
  }
  else if (type == 'WORDART') {
    slide.insertWordArt(element.asWordArt())
  }
}


function extractPresentationAndSlideId(url) {
  const presentationIdMatch = url.match(/\/d\/([^/]+)/);
  const slideIdMatch = url.match(/[#&]slide=id\.([^&]+)/);

  const presentationID = presentationIdMatch ? presentationIdMatch[1] : null;
  const slideID = slideIdMatch ? slideIdMatch[1] : null;

  return { presentationID, slideID };
}
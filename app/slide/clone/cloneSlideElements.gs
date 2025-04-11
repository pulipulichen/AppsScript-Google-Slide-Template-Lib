function cloneSlideElements(element, slide) {
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
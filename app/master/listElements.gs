function listElements() {
  const presentation = SlidesApp.getActivePresentation();
  const presentationId = presentation.getId();

  Logger.log({presentationId})

  let slides = presentation.getSlides()
  for (let slide of slides) {
    let elements = slide.getPageElements()
    for (let element of elements) {
      try {
        let type = element.getPageElementType()

        let text, objectId
        if (type == 'SHAPE') {
          let shape = element.asShape()  
          objectId = shape.getObjectId()
          text = shape.getText().asRenderedString()
        }
        else if (type == 'TABLE') {
          let table = element.asTable()  
          objectId = table.getObjectId()
          text = table.getCell(0, 0).getText().asRenderedString()
        }

        Logger.log(`${text} - ${objectId}`)
      }
      catch (e) {

      }
    }
  }
}

/**
 * 凌晨4:34:44	通知	開始執行
凌晨4:34:44	資訊	{presentationId=1viNIMWSkEJvjoOMC7rgVAkfjsUBgHeVGTbObl8Vmgc8}
凌晨4:34:44	資訊	陰影
 - g3404ce6e9b0_0_0
 */
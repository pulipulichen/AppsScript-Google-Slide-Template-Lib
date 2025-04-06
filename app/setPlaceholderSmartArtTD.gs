function setPlaceholderSmartArtTD(shape, markdown, config = {}) {
  let list = parseMarkdownList(markdown)
  // Logger.log(list)

  // let textRange = shape.getText()
  
  // textRange.setText(markdown)

  // let textStyle = textRange.getTextStyle()
  // textStyle.setFontFamily('Consolas')
  // textStyle.setForegroundColor(SlidesApp.ThemeColorType.DARK2)

  // let paragraphStyle = textRange.getParagraphStyle()
  // paragraphStyle.setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER)

  // shape.getFill().setSolidFill(SlidesApp.ThemeColorType.LIGHT2)
  // let border = shape.getBorder()
  // border.setWeight(parseInt(textStyle.getFontSize() / 10))
  // border.setDashStyle(SlidesApp.DashStyle.SOLID)
  // border.getLineFill().setSolidFill(SlidesApp.ThemeColorType.DARK2)
  // shape.setContentAlignment(SlidesApp.ContentAlignment.MIDDLE)

  const containerWidth = shape.getWidth()
  const containerHeight = shape.getHeight()
  const containerLeft = shape.getLeft()
  const containerTop = shape.getTop()

  let count = list.length
  const shapeVerticalMargin = containerHeight / (count * 2 + (count - 1))
  const shapeHeight = shapeVerticalMargin * 2

  const shapeHorizontalMargin = containerWidth / 10 / (count - 1)
  const shapeWidth =  containerWidth * 0.9

  let slide = shape.getParentPage();

  // Logger.log(SlidesApp.ThemeColorType.DARK2)

  let sourceShape = getTemplatePageElement('SHAPE_SHADOW')
  


  for (let i = 0; i < list.length; i++) {
    let {type, text, level} = list[i]

    const top = containerTop + ((i * (shapeVerticalMargin + shapeHeight)))
    const left = containerLeft + ((i * (shapeHorizontalMargin)))

    // const itemShape = slide.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, left, top, shapeWidth, shapeHeight);
    const itemShape = slide.insertShape(sourceShape)
    itemShape.setLeft(left)
    itemShape.setTop(top)
    itemShape.setWidth(shapeWidth)
    itemShape.setHeight(shapeHeight)

    let textRange = itemShape.getText()
    textRange.clear()
    textRange.setText(text);

    let fontSize = shapeHeight / 2

    let textStyle = textRange.getTextStyle()
    textStyle.setFontSize(fontSize); // 可選：設字體大小
    textStyle.setForegroundColor("#FFFFFF")

    let fill = itemShape.getFill()
    fill.setSolidFill(SlidesApp.ThemeColorType["ACCENT" + ((i%6) + 1)])
    
    let border = itemShape.getBorder()
    border.setWeight(fontSize / 10)
    border.setDashStyle(SlidesApp.DashStyle.SOLID)
    border.getLineFill().setSolidFill("#FFFFFF")

    let paragraphStyle = textRange.getParagraphStyle()
    paragraphStyle.setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER)    
  }

  // const presentationId = presentationId
  // const presentation2 = Slides.Presentations.get(presentationId);
  // const slides = presentation2.slides;

  // const requests = []
  // Logger.log(slides.length); // *** 新增日誌 ***
  // slides[(slides.length - 1)].pageElements.forEach(element => {
    
  //   if ((element.shape?.shapeType) + '' !== 'ROUND_RECTANGLE') {
  //     return
  //   }
  //   Logger.log(`  Element ID: ${element.objectId}, Type: ${element.shape?.shapeType}`);
  //   let shapeId = element.objectId

  //   requests.push({
  //     updateShapeProperties: {
  //       objectId: shapeId,
  //       shapeProperties: {
  //         shadow: 
  //       },
  //       fields: "contentAlignment,autofit.autofitType"
  //     }
  //   })
  // });

  // const Presentation = Slides.Presentations
  // Presentation.batchUpdate({ requests: requests }, presentationId);
}
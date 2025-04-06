function setPlaceholderSmartArtHamburger(shape, markdown, config = {}) {
  let {
    layoutConfig, 
    colorConfig
  } = setPlaceholderSmartArtHamburgerConfig(config)

  let list = parseMarkdownListTree(markdown)
  Logger.log(list)

  // ===========================

  const containerWidth = shape.getWidth()
  const containerHeight = shape.getHeight()
  const containerLeft = shape.getLeft()
  const containerTop = shape.getTop()

  let count = list.length
  const shapeVerticalMargin = containerHeight / (count * 2 + (count - 1))
  const shapeHeight = shapeVerticalMargin * 2

  const shapeHorizontalMargin = containerWidth / 10 / (count - 1)
  let shapeWidth = containerWidth
  if (layoutConfig.direction !== '82') {
    shapeWidth =  shapeWidth * 0.9
  }

  let slide = shape.getParentPage();

  // Logger.log(SlidesApp.ThemeColorType.DARK2)

  let titleLength = 0
  for (let i = 0; i < list.length; i++) {
    let {level, text, type, title, subtitle, picture} = list[i]

    if (title && title.length > titleLength) {
      titleLength = title.length
    }
  }

  for (let i = 0; i < list.length; i++) {
    let {level, text, type, title, subtitle, picture} = list[i]

    const top = containerTop + ((i * (shapeVerticalMargin + shapeHeight)))
    
    let left = containerLeft
    if (layoutConfig.direction === '73') {
      left = left + ((i * (shapeHorizontalMargin)))
    }
    else if (layoutConfig.direction === '91') {
      left = left + (((list.length - i - 1) * (shapeHorizontalMargin)))
    } 

    // const itemShape = slide.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, left, top, shapeWidth, shapeHeight);
    // const itemShape = slide.insertShape(sourceShape)
    // itemShape.setLeft(left)
    // itemShape.setTop(top)
    // itemShape.setWidth(shapeWidth)
    // itemShape.setHeight(shapeHeight)

    let progress = (i / (list.length - 1))

    if (type === 'bullet' && !title && !picture) {
      let itemShape = setPlaceholderSmartArtHamburgerInsertItemShape('ROUND_RECTANGLE_SHADOW', slide, left, top, shapeWidth, shapeHeight)
      setPlaceholderSmartArtHamburgerItemShapeCenter(slide, itemShape, progress, i, text, colorConfig)
    }
    else if (type === 'number' && !title && !picture) {
      let itemShape = setPlaceholderSmartArtHamburgerInsertItemShape('RECTANGLE_SHADOW', slide, left, top, shapeWidth, shapeHeight)
      setPlaceholderSmartArtHamburgerItemShapeNumberCenter(slide, itemShape, progress, i, text, colorConfig)
    }
    else if (type === 'bullet' && title && !picture) {
      let itemShape = setPlaceholderSmartArtHamburgerInsertItemShape('RECTANGLE_SHADOW', slide, left, top, shapeWidth, shapeHeight)
      setPlaceholderSmartArtHamburgerItemShapeHeaderText(slide, itemShape, progress, i, title, subtitle, colorConfig, titleLength)
    }
  }
}

function setPlaceholderSmartArtHamburgerInsertItemShape(template, slide, left, top, width, height) {
  let sourceShape = getTemplatePageElement(template)
  const itemShape = slide.insertShape(sourceShape)
  itemShape.setLeft(left)
  itemShape.setTop(top)
  itemShape.setWidth(width)
  itemShape.setHeight(height)
  return itemShape
}


function setPlaceholderSmartArtHamburgerItemShapeCenter(slide, itemShape, progress, i, text, colorConfig) {
  let {foreground, background} = getColor(progress, colorConfig)

  let textRange = itemShape.getText()
  textRange.clear()
  textRange.setText(text);

  let fontSize = shapeHeight / 2

  let textStyle = textRange.getTextStyle()
  textStyle.setFontSize(fontSize); // 可選：設字體大小
  

  let fill = itemShape.getFill()
  fill.setSolidFill(background)
  
  let border = itemShape.getBorder()
  border.setWeight(fontSize / 10)
  border.setDashStyle(SlidesApp.DashStyle.SOLID)
  border.getLineFill().setSolidFill(foreground)
  textStyle.setForegroundColor(foreground)

  let paragraphStyle = textRange.getParagraphStyle()
  paragraphStyle.setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER)    
}

function setPlaceholderSmartArtHamburgerItemShapeNumberCenter(slide, itemShape, progress, i, text, colorConfig) {
  let {foreground, background} = getColor(progress, colorConfig)

  setPlaceholderSmartArtHamburgerItemShapeContainer(itemShape, foreground, background)  
  
  // border.setDashStyle(SlidesApp.DashStyle.SOLID)
  // border.getLineFill().setSolidFill(foreground)

  // let fontSize = getFontSizeFromShape(itemShape)
  // let numberShapeWidth = itemShape.getHeight()
  
  let numberShape = slide.insertShape(
    SlidesApp.ShapeType.RECTANGLE,
    itemShape.getLeft(),
    itemShape.getTop(),
    itemShape.getHeight(),
    itemShape.getHeight()
  )

  setPlaceholderSmartArtHamburgerItemShapeHeader(numberShape, (i + 1), foreground, background)  

  // =============================

  // Logger.log([itemShape.getWidth(), itemShape.getHeight()])

  let titleShape = slide.insertShape(
    SlidesApp.ShapeType.TEXT_BOX,
    itemShape.getLeft() + itemShape.getHeight(),
    itemShape.getTop(),
    itemShape.getWidth() - itemShape.getHeight(),
    itemShape.getHeight()
  )

  setPlaceholderSmartArtHamburgerItemShapeTitle(titleShape, text, background)
}

function setPlaceholderSmartArtHamburgerItemShapeContainer(itemShape, foreground, background) {
  itemShape.getText().clear()
  itemShape.getFill().setSolidFill(foreground)

  let fontSize = itemShape.getHeight() / 2
  let border = itemShape.getBorder()
  border.setWeight(fontSize / 10)
  border.setDashStyle(SlidesApp.DashStyle.SOLID)
  border.getLineFill().setSolidFill(background)
}

function setPlaceholderSmartArtHamburgerItemShapeHeader(shape, text, foreground, background) {
  
  let textRange = shape.getText()
  textRange.clear()
  textRange.setText(text);

  let fontSize = shape.getHeight() / 2

  let textStyle = textRange.getTextStyle()
  textStyle.setFontSize(fontSize); // 可選：設字體大小

  let fill = shape.getFill()
  fill.setSolidFill(background)
  
  let border = shape.getBorder()
  border.setWeight(fontSize / 10)
  border.setDashStyle(SlidesApp.DashStyle.SOLID)
  border.getLineFill().setSolidFill(background)

  textStyle.setForegroundColor(foreground)

  let paragraphStyle = textRange.getParagraphStyle()
  paragraphStyle.setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER)
  shape.setContentAlignment(SlidesApp.ContentAlignment.MIDDLE)
}

function setPlaceholderSmartArtHamburgerItemShapeTitle(shape, text, color) {
  
  let textRange = shape.getText()
  textRange.clear()
  textRange.setText(text);

  let fontSize = shape.getHeight() / 2

  let textStyle = textRange.getTextStyle()
  textStyle.setFontSize(fontSize); // 可選：設字體大小

  textStyle.setForegroundColor(color)

  let paragraphStyle = textRange.getParagraphStyle()
  paragraphStyle.setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER)
  shape.setContentAlignment(SlidesApp.ContentAlignment.MIDDLE)
}

function setPlaceholderSmartArtHamburgerItemShapeText(shape, text, color) {
  
  let fontSize
  let lines = text.trim().split('\n')
  let linesCount = lines.length
  if (linesCount < 2) {
    fontSize = shape.getHeight() / 3
  }
  else if (linesCount == 2) {
    fontSize = shape.getHeight() / 4
  }
  else {
    fontSize = shape.getHeight() / 5
  }

  let textRange = shape.getText()
  textRange.clear()

  for (let i = 0; i < linesCount; i++) {
    let line = lines[i]
    if (i === 0) {
      textRange.setText(line)
      continue
    }

    textRange.appendParagraph(line)
  }
  
  if (linesCount > 1) {
    textRange.getListStyle().applyListPreset(SlidesApp.ListPreset.DISC_CIRCLE_SQUARE);
  }

  
  let textStyle = textRange.getTextStyle()
  textStyle.setFontSize(fontSize); // 可選：設字體大小

  textStyle.setForegroundColor(color)

  let paragraphStyle = textRange.getParagraphStyle()
  paragraphStyle.setParagraphAlignment(SlidesApp.ParagraphAlignment.START)
  shape.setContentAlignment(SlidesApp.ContentAlignment.MIDDLE)

}

function setPlaceholderSmartArtHamburgerItemShapeHeaderText(slide, itemShape, progress, i, title, subtitle, colorConfig, titleLength) {
  let {foreground, background} = getColor(progress, colorConfig)

  setPlaceholderSmartArtHamburgerItemShapeContainer(itemShape, foreground, background)  
  
  // border.setDashStyle(SlidesApp.DashStyle.SOLID)
  // border.getLineFill().setSolidFill(foreground)

  // let fontSize = getFontSizeFromShape(itemShape)
  // let numberShapeWidth = itemShape.getHeight()
  
  let headerShapeWidthMargin = (itemShape.getHeight() / 2)
  let headerShapeWidth = headerShapeWidthMargin * (titleLength + 2)
  let headerShape = slide.insertShape(
    SlidesApp.ShapeType.RECTANGLE,
    itemShape.getLeft(),
    itemShape.getTop(),
    headerShapeWidth,
    itemShape.getHeight()
  )

  setPlaceholderSmartArtHamburgerItemShapeHeader(headerShape, title, foreground, background)  

  // =============================

  // Logger.log([itemShape.getWidth(), itemShape.getHeight()])

  let textShape = slide.insertShape(
    SlidesApp.ShapeType.TEXT_BOX,
    itemShape.getLeft() + headerShapeWidth + headerShapeWidthMargin,
    itemShape.getTop(),
    itemShape.getWidth() - headerShapeWidth - headerShapeWidthMargin,
    itemShape.getHeight()
  )

  let textColor = '#000000'
  if (colorConfig.invert === false) {
    textColor = '#FFFFFF'
  }

  setPlaceholderSmartArtHamburgerItemShapeText(textShape, subtitle, textColor)
}

function setPlaceholderSmartArtHamburgerConfig(config) {

  let {
    // palette = "theme",
    // colorReverse = false,
    // colorInvert = true
    layout = {},
    color = {}
  } = config


  // ===========================

  if (typeof(layout) === 'string') {
    layout = {
      direction: layout
    }
  }

  let layoutConfig = {
    direction: '73', 
    ...layout
  }

  // ===========================

  if (typeof(color) === 'string') {
    color = {
      palette: color
    }
  }

  let colorConfig = {
    palette: 'theme', 
    reverse: false, 
    sequential: false,
    invert: true,
    ...color
  }

  return {
    layoutConfig, 
    colorConfig
  }
}

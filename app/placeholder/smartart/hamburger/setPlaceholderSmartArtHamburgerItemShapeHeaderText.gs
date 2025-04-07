function setPlaceholderSmartArtHamburgerItemShapeHeaderText(slide, itemShape, progress, i, title, subtitle, colorConfig, layoutConfig, titleLength) {
  let {foreground, background} = getColor(progress, colorConfig)

  setPlaceholderSmartArtContainer(itemShape, foreground, background, layoutConfig)
  
  let fontSize = setPlaceholderSmartArtHamburgerFontSize(itemShape.getHeight())
  
  let group = []

  // =============

  if (layoutConfig.arrow === false) {
    group.push(itemShape)
  }
  else if (progress !== 1) {
    let arrowShape = setPlaceholderSmartArtArrowBelow(fontSize, slide, itemShape)
    let subgroup = slide.group([itemShape, arrowShape])
    subgroup.sendToBack()
    group.push(subgroup)
  }
  else {
    itemShape.sendToBack()
    group.push(itemShape)
  }

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

  setPlaceholderSmartArtHeader(fontSize, headerShape, title, foreground, background)  
  group.push(headerShape)

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

  setPlaceholderSmartArtText(fontSize, textShape, subtitle, textColor)
  group.push(textShape)

  slide.group(group).sendToBack()

}


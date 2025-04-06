function setPlaceholderSmartArtHamburgerItemShapeNumberHeaderText(slide, itemShape, progress, i, title, subtitle, colorConfig, layoutConfig, titleLength) {
  let {foreground, background} = getColor(progress, colorConfig)

  setPlaceholderSmartArtContainer(itemShape, foreground, background, layoutConfig)
  
  let group = []

  if (layoutConfig.arrow === false) {
    group.push(itemShape)
  }
  else if (progress !== 1) {
    let arrowShape = setPlaceholderSmartArtArrowBelow(slide, itemShape)
    let subgroup = slide.group([itemShape, arrowShape])
    subgroup.sendToBack()
    group.push(subgroup)
  }
  else {
    itemShape.sendToBack()
    group.push(itemShape)
  }

  // =========================

  let numberShapeWidth = itemShape.getHeight()
  let numberShape = slide.insertShape(
    SlidesApp.ShapeType.RECTANGLE,
    itemShape.getLeft(),
    itemShape.getTop(),
    numberShapeWidth,
    itemShape.getHeight()
  )

  setPlaceholderSmartArtHeader(numberShape, (i + 1), foreground, background)  
  group.push(numberShape)

  // =========================
    
  let headerShapeWidthMargin = (itemShape.getHeight() / 2)
  let headerShapeWidth = headerShapeWidthMargin * (titleLength + 1)

  let titleShape = slide.insertShape(
    SlidesApp.ShapeType.TEXT_BOX,
    itemShape.getLeft() + itemShape.getHeight(),
    itemShape.getTop(),
    headerShapeWidth,
    itemShape.getHeight()
  )

  setPlaceholderSmartArtTitle(titleShape, title, background)
  group.push(titleShape)

  // =============================

  // Logger.log([itemShape.getWidth(), itemShape.getHeight()])

  let textShapeMarginLeft = numberShapeWidth + headerShapeWidth + headerShapeWidthMargin
  let textShape = slide.insertShape(
    SlidesApp.ShapeType.TEXT_BOX,
    itemShape.getLeft() + textShapeMarginLeft,
    itemShape.getTop(),
    itemShape.getWidth() - textShapeMarginLeft,
    itemShape.getHeight()
  )

  let textColor = '#000000'
  if (colorConfig.invert === false) {
    textColor = '#FFFFFF'
  }

  setPlaceholderSmartArtText(textShape, subtitle, textColor)
  group.push(textShape)

  slide.group(group).sendToBack()

}


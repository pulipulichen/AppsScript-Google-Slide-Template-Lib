function setPlaceholderSmartArtColumn(shape, markdown, config = {}) {
  let {
    layoutConfig, 
    colorConfig
  } = setPlaceholderSmartArtColumnConfig(config)

  let list = parseMarkdownListTree(markdown)
  let titleLength = parseMarkdownListTitleLength(list)
  
  Logger.log({list})

  // ===========================

  const containerWidth = shape.getWidth()
  const containerHeight = shape.getHeight()
  const containerLeft = shape.getLeft()
  const containerTop = shape.getTop()

  let count = list.length
  let slide = shape.getParentPage();

  // ========
  
  
  let shapeHeight = containerHeight
  if (layoutConfig.direction !== '46') {
    shapeHeight =  shapeHeight * 0.8
  }
  else {
    shapeHeight =  shapeHeight * 0.5
  }
  const shapeVerticalMargin = (containerHeight - shapeHeight) / (count - 1)

  const shapeHorizontalMargin = containerWidth / (count * 2 + (count - 1))
  const shapeWidth = shapeHorizontalMargin * 2

  // Logger.log(SlidesApp.ThemeColorType.DARK2)
  

  // ========

  for (let i = 0; i < list.length; i++) {
    let {level, text, type, title, subtitle, picture} = list[i]
    let progress = (i / (list.length - 1))

    // ==============================

    let top = containerTop
    if (layoutConfig.direction === '73') {
      top = top + ((i * (shapeVerticalMargin)))
    }
    else if (layoutConfig.direction === '19') {
      top = top + (((list.length - i - 1) * (shapeVerticalMargin)))
    } 
    
    let left = containerLeft + (i * (shapeWidth + shapeHorizontalMargin))
    
    // ===============================

    if (type === 'bullet' && !title && !picture) {
      let itemShape = setPlaceholderSmartArtInsertItemShape('ROUND_RECTANGLE_SHADOW', slide, left, top, shapeWidth, shapeHeight)
      setPlaceholderSmartArtColumnItemShapeCenter(slide, itemShape, progress, i, text, colorConfig, layoutConfig)
    }
    else if (type === 'bullet' && !title && picture) {
      let itemShape = setPlaceholderSmartArtInsertItemShape('RECTANGLE_SHADOW', slide, left, top, shapeWidth, shapeHeight)
      setPlaceholderSmartArtColumnItemShapePictureCenter(slide, itemShape, progress, picture, text, colorConfig, layoutConfig)
    }
    else if (type === 'number' && !title && picture) {
      let itemShape = setPlaceholderSmartArtInsertItemShape('RECTANGLE_SHADOW', slide, left, top, shapeWidth, shapeHeight)
      setPlaceholderSmartArtColumnItemShapeNumberPictureCenter(slide, itemShape, progress, i, picture, text, colorConfig, layoutConfig)
    }
    else if (type === 'number' && title && picture) {
      let itemShape = setPlaceholderSmartArtInsertItemShape('RECTANGLE_SHADOW', slide, left, top, shapeWidth, shapeHeight)
      setPlaceholderSmartArtColumnItemShapeNumberPictureTitleText(slide, itemShape, progress, i, picture, title, subtitle, colorConfig, layoutConfig, titleLength)
    }
    else if (type === 'number' && !title && !picture) {
      let itemShape = setPlaceholderSmartArtInsertItemShape('RECTANGLE_SHADOW', slide, left, top, shapeWidth, shapeHeight)
      setPlaceholderSmartArtColumnItemShapeNumberCenter(slide, itemShape, progress, i, text, colorConfig, layoutConfig)
    }
    else if (type === 'bullet' && title && picture) {
      let itemShape = setPlaceholderSmartArtInsertItemShape('RECTANGLE_SHADOW', slide, left, top, shapeWidth, shapeHeight)
      setPlaceholderSmartArtColumnItemShapePictureHeaderText(slide, itemShape, progress, picture, title, subtitle, colorConfig, layoutConfig, titleLength)
    }
    else if (type === 'bullet' && title && !picture) {
      let itemShape = setPlaceholderSmartArtInsertItemShape('RECTANGLE_SHADOW', slide, left, top, shapeWidth, shapeHeight)
      setPlaceholderSmartArtColumnItemShapeHeaderText(slide, itemShape, progress, i, title, subtitle, colorConfig, layoutConfig, titleLength)
    }
    else if (type === 'number' && title && !picture) {
      let itemShape = setPlaceholderSmartArtInsertItemShape('RECTANGLE_SHADOW', slide, left, top, shapeWidth, shapeHeight)
      setPlaceholderSmartArtColumnItemShapeNumberTitleText(slide, itemShape, progress, i, title, subtitle, colorConfig, layoutConfig, titleLength)
    }
  }

  shape.sendToBack()
}
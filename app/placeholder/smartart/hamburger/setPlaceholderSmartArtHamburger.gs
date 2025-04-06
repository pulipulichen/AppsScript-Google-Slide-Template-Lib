function setPlaceholderSmartArtHamburger(shape, markdown, config = {}) {
  let {
    layoutConfig, 
    colorConfig
  } = setPlaceholderSmartArtHamburgerConfig(config)

  let list = parseMarkdownListTree(markdown)
  Logger.log({list})

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

    let progress = (i / (list.length - 1))

    if (type === 'bullet' && !title && !picture) {
      let itemShape = setPlaceholderSmartArtInsertItemShape('ROUND_RECTANGLE_SHADOW', slide, left, top, shapeWidth, shapeHeight)
      setPlaceholderSmartArtHamburgerItemShapeCenter(slide, itemShape, progress, i, text, colorConfig, layoutConfig)
    }
    else if (type === 'bullet' && !title && picture) {
      let itemShape = setPlaceholderSmartArtInsertItemShape('RECTANGLE_SHADOW', slide, left, top, shapeWidth, shapeHeight)
      setPlaceholderSmartArtHamburgerItemShapePictureCenter(slide, itemShape, progress, picture, text, colorConfig, layoutConfig)
    }
    else if (type === 'number' && !title && picture) {
      let itemShape = setPlaceholderSmartArtInsertItemShape('RECTANGLE_SHADOW', slide, left, top, shapeWidth, shapeHeight)
      setPlaceholderSmartArtHamburgerItemShapeNumberPictureCenter(slide, itemShape, progress, i, picture, text, colorConfig, layoutConfig)
    }
    else if (type === 'number' && title && picture) {
      let itemShape = setPlaceholderSmartArtInsertItemShape('RECTANGLE_SHADOW', slide, left, top, shapeWidth, shapeHeight)
      setPlaceholderSmartArtHamburgerItemShapeNumberPictureHeaderText(slide, itemShape, progress, i, picture, title, subtitle, colorConfig, layoutConfig, titleLength)
    }
    else if (type === 'number' && !title && !picture) {
      let itemShape = setPlaceholderSmartArtInsertItemShape('RECTANGLE_SHADOW', slide, left, top, shapeWidth, shapeHeight)
      setPlaceholderSmartArtHamburgerItemShapeNumberCenter(slide, itemShape, progress, i, text, colorConfig, layoutConfig)
    }
    else if (type === 'bullet' && title && picture) {
      let itemShape = setPlaceholderSmartArtInsertItemShape('RECTANGLE_SHADOW', slide, left, top, shapeWidth, shapeHeight)
      setPlaceholderSmartArtHamburgerItemShapePictureHeaderText(slide, itemShape, progress, picture, title, subtitle, colorConfig, layoutConfig, titleLength)
    }
    else if (type === 'bullet' && title && !picture) {
      let itemShape = setPlaceholderSmartArtInsertItemShape('RECTANGLE_SHADOW', slide, left, top, shapeWidth, shapeHeight)
      setPlaceholderSmartArtHamburgerItemShapeHeaderText(slide, itemShape, progress, i, title, subtitle, colorConfig, layoutConfig, titleLength)
    }
    else if (type === 'number' && title && !picture) {
      let itemShape = setPlaceholderSmartArtInsertItemShape('RECTANGLE_SHADOW', slide, left, top, shapeWidth, shapeHeight)
      setPlaceholderSmartArtHamburgerItemShapeNumberHeaderText(slide, itemShape, progress, i, title, subtitle, colorConfig, layoutConfig, titleLength)
    }
  }

  shape.sendToBack()
}
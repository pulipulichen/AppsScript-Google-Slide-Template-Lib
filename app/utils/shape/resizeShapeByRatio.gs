function resizeShapeByRatio(shape, width = 0, height = 0) {
  if (width > 0 && width < 1) {
    let original = shape.getWidth()
    let resized = original * width

    let position = shape.getLeft()
    let moved = position + ((original - resized) / 2)
    
    shape.setWidth(resized)
    shape.setLeft(moved)
  }

  if (height > 0 && height < 1) {
    let original = shape.getHeight()
    let resized = original * height

    let position = shape.getTop()
    let moved = position + ((original - resized) / 2)
    
    shape.setHeight(resized)
    shape.setTop(moved)
  }

  return shape
}
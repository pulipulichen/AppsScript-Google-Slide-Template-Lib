function buildSmartArtRowArrow(fontSize, slide, itemShape, layoutConfig, progress) {
  if (layoutConfig.arrow === false) {
    return itemShape
  }
  else if (progress !== 1) {
    let arrowShape = setPlaceholderSmartArtArrowBelow(fontSize, slide, itemShape)
    let subgroup = slide.group([itemShape, arrowShape])
    subgroup.sendToBack()
    return subgroup
  }
  else {
    itemShape.sendToBack()
    return itemShape
  }
}
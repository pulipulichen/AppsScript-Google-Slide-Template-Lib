function createSlideFromSourceSlide(sourceSlide, presentation, offset = 0) {
  let sourceLayout = sourceSlide.getLayout()
  let sourceMasterID = sourceLayout.getMaster().getObjectId()
  let sourceLayoutID = sourceMasterID + '_' + sourceLayout.getLayoutName()

  let targetLayout = findLayoutByID(sourceLayoutID)

  if (!targetLayout) {
    const placeholders = sourceLayout.getPlaceholders();
    const sortedPlaceholders = sortPlaceholders(placeholders)

    // const types = sortedPlaceholders.map(i => i.type)
    // Logger.log(types)


    targetLayout = detectLayout(sortedPlaceholders)
  }

  // let layoutName = sourceLayout.getLayoutName()

  // // let masterID = sourceLayout.getMaster().getObjectId()
  
  // // let sourcePageElements = sourceSlide.getPageElements()

  // // =================================

  // const layoutObject = findLayout(layoutName)
  // const slide = presentation.appendSlide(targetLayout)

  const slide = insertSlide(presentation, targetLayout, offset)

  return slide
}
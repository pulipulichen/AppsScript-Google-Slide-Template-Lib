function createSlideFromSourceSlide(sourceSlide) {
  let sourceLayout = sourceSlide.getLayout()


  const placeholders = sourceLayout.getPlaceholders();
  const sortedPlaceholders = sortPlaceholders(placeholders)

  // const types = sortedPlaceholders.map(i => i.type)
  const targetLayout = detectLayout(sortedPlaceholders)



  // let layoutName = sourceLayout.getLayoutName()

  // // let masterID = sourceLayout.getMaster().getObjectId()
  
  // // let sourcePageElements = sourceSlide.getPageElements()

  // // =================================

  // const layoutObject = findLayout(layoutName)
  const slide = presentation.appendSlide(targetLayout)

  return slide
}
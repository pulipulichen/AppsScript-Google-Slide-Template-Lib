function cloneSlidePlaceholders(sourceSlide, slide) {
  const sourcePlaceholders = sourceSlide.getLayout().getPlaceholders();
  const sourceSortedPlaceholders = sortPlaceholders(sourcePlaceholders)

  const targetPlaceholders = slide.getLayout().getPlaceholders();
  const targetSortedPlaceholders = sortPlaceholders(targetPlaceholders)


  let clonedElementIDList = []
  for (let i = 0; i < sourceSortedPlaceholders.length; i++) {
    let sourcePlaceholder = sourcePlaceholders[i]
    let targetPlaceholder = targetSortedPlaceholders[i].object

    if (!targetPlaceholder) {
      continue
    }

    // Logger.log(targetPlaceholder)

    let sourceType = sourcePlaceholder.getPageElementType()
    let targetType = targetPlaceholder.getPageElementType()

    if (sourceType != targetType) {
      continue
    }

    if (sourceType == 'SHAPE') {
      let paragraphs = sourcePlaceholder.asShape().getText().getListParagraphs()
      for (let paragraph of paragraphs) {
        targetPlaceholder.getText().appendParagraph(paragraph)
      }
        
      // Logger.log(sourceData.asRenderedString())
      // if (sourceData.asRenderedString() != -1) {
      //   targetPlaceholder.getText().appendRange(sourceData)
      // }
    }
    else if (sourceType == 'IMAGE') {
      let sourceData = sourcePlaceholder.asImage().getBlob()
      let image = targetPlaceholder.replace(sourceData, false)
      // image.replace(image)
    }


    clonedElementIDList.push(sourcePlaceholder.getObjectId())
  }

  return clonedElementIDList
}
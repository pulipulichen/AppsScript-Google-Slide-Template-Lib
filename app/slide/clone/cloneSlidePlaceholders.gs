function cloneSlidePlaceholders(sourceSlide, slide) {
  const sourcePlaceholders = sourceSlide.getPlaceholders();
  const sourceSortedPlaceholders = sortPlaceholders(sourcePlaceholders)

  // Logger.log({sourceSortedPlaceholdersTypes: sourceSortedPlaceholders.map(s => s.type)})

  const targetPlaceholders = slide.getPlaceholders();
  const targetSortedPlaceholders = sortPlaceholders(targetPlaceholders)


  let clonedElementIDList = []
  for (let i = 0; i < sourceSortedPlaceholders.length; i++) {
    let sourcePlaceholder = sourceSortedPlaceholders[i].object
    let targetPlaceholder = targetSortedPlaceholders[i].object

    if (!targetPlaceholder) {
      continue
    }

    // Logger.log(targetPlaceholder)

    let sourceType = sourcePlaceholder.getPageElementType()
    let targetType = targetPlaceholder.getPageElementType()

    // Logger.log([sourceType, targetType])
    if (sourceType != targetType) {
      continue
    }

    let objectId
    // Logger.log(sourceType)
    if (sourceType == 'SHAPE') {
      objectId = sourcePlaceholder.getObjectId()
      let sourceTextRange = sourcePlaceholder.getText()
      let targetTextRange = targetPlaceholder.getText()
      // let paragraphs = .getParagraphs()
      // Logger.log({count: paragraphs.length})
      for (let paragraph of sourceTextRange.getParagraphs()) {
        targetTextRange.setText(paragraph.getRange().asRenderedString())
      }
      for (let paragraph of sourceTextRange.getListParagraphs()) {
        targetTextRange.insertParagraph(paragraph)
      }
        
      // Logger.log(sourceData.asRenderedString())
      // if (sourceData.asRenderedString() != -1) {
      //   targetPlaceholder.getText().appendRange(sourceData)
      // }
    }
    else if (sourceType == 'IMAGE') {
      objectId = sourcePlaceholder.getObjectId()
      let sourceData = sourcePlaceholder.getBlob()
      let image = targetPlaceholder.replace(sourceData, false)
      // image.replace(image)
    }

    
    clonedElementIDList.push(objectId)
  }

  // Logger.log({clonedElementIDList})
  

  return clonedElementIDList
}
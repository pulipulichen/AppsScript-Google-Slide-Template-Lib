function sortPlaceholders(placeholders, config = {}) {
  let output = []

  const presentation = SlidesApp.getActivePresentation();
  const pageHeight = presentation.getPageHeight()

  let {
    excludeBelowTop = 0.8
  } = config

  if (excludeBelowTop) {
    excludeBelowTop = pageHeight * excludeBelowTop
  }
    
  for (let i = 0; i < placeholders.length; i++) {
    let placeholder = placeholders[i]
    let object 
    try {
      object = placeholder.asShape()
    }
    catch (e) {
      object = placeholder.asImage()
    }

    let type = object.getPlaceholderType()
    type = type + ''

    let left = object.getLeft()
    let top = object.getTop()

    if (type == 'CENTERED_TITLE') {
      type = 'TITLE'
    }
    if (type == 'SLIDE_NUMBER') {
      continue
    }

    if (excludeBelowTop && top > excludeBelowTop) {
      continue
    }

    output.push({
      object,
      type,
      left,
      top
    })
  }

  output.sort((a, b) => {
    if (a.top !== b.top) {
      return a.top - b.top; // 先排 top（由小到大）
    }
    return a.left - b.left; // top 相同時排 left（由小到大）

    // if (a.left !== b.left) {
    //     return a.left - b.left; // 先排 top（由小到大）
    //   }
    //   return a.top - b.top; // top 相同時排 left（由小到大）
  });

  return output
}

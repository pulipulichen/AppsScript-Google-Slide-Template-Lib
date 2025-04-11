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

    if (type == 'BODY') {
      if (object.getWidth() < object.getHeight()) {
        type = 'BODY_PORTRAIT'
      }
      else {
        type = 'BODY_LANDSCAPE'
      }
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

  // ===============================================
  // 先把left相同的物件排成一組

  // if (output.length === 5) {
  //   Logger.log('原本的' + output.map(i => i.type).join(','))
  // }

  let matchedIndexes = []

  let groups = []
  for (let i = 0; i < output.length; i++) {
    let item = output[i]

    if (matchedIndexes.includes(i)) {
      continue
    }

    if (item.type != 'SUBTITLE') {
      groups.push([item])
      continue
    }

    let baseTop = Math.round(item.top)
    let baseLeft = Math.round(item.left)
    let baseGroup = [item]
    for (let j = (i+1); j < output.length; j++) {
      let checkItem = output[j]
      if (checkItem.type.startsWith('BODY') === false) {
        continue
      }

      if (baseLeft === Math.round(checkItem.left) || 
        baseTop === Math.round(checkItem.top)) {
        baseGroup.push(checkItem)
        matchedIndexes.push(j)
      }
    }

    // Logger.log(baseGroup)
    groups.push(baseGroup)
  }

  groups.sort((a, b) => {
    a = a[0]
    b = b[0]

    if (a.top !== b.top) {
      return a.top - b.top; // 先排 top（由小到大）
    }
    return a.left - b.left; // top 相同時排 left（由小到大）
  })

  output = []

  // Logger.log({groupLeft})

  groups.map((group) => {
    group.map(item => {
      output.push(item)
    })
  })


  // if (output.length === 5) {
  //   Logger.log('轉換後' + output.map(i => i.type).join(','))
  // }
    

  // let sameLeft = {}

  // output.map(item => {
  //   let {left} = item
  //   left = Math.round(left)
    
  //   if (!sameLeft[left]) {
  //     sameLeft[left] = []
  //   }

  //   sameLeft[left].push(item)
  // })

  

  // let groupLeft = []
  // Object.keys(sameLeft).map(left => {
  //   sameLeft[left].sort((a, b) => {
  //     if (a.top !== b.top) {
  //       return a.top - b.top; // 先排 top（由小到大）
  //     }
  //     return a.left - b.left; // top 相同時排 left（由小到大）
  //   })

  //   groupLeft.push(sameLeft[left])
  // })

  // groupLeft.sort((a, b) => {
  //   a = a[0]
  //   b = b[0]

  //   if (a.top !== b.top) {
  //     return a.top - b.top; // 先排 top（由小到大）
  //   }
  //   return a.left - b.left; // top 相同時排 left（由小到大）
  // })

  // // if (output.length === 5) {
  // //   Logger.log({sameLeft, groupLeft})
  // // } 

  // output = []

  // // Logger.log({groupLeft})

  // groupLeft.map((group) => {
  //   group.map(item => {
  //     output.push(item)
  //   })
  // })


  // ===============================================

  // output.sort((a, b) => {
  //   if (a.top !== b.top) {
  //     return a.top - b.top; // 先排 top（由小到大）
  //   }
  //   return a.left - b.left; // top 相同時排 left（由小到大）

  //   // if (a.left !== b.left) {
  //   //     return a.left - b.left; // 先排 top（由小到大）
  //   //   }
  //   //   return a.top - b.top; // top 相同時排 left（由小到大）
  // });

  return output
}

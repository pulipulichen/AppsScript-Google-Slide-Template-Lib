function findLayout(layoutName) {
  if (!LAYOUT_CACHE) {
    loadLayoutCache()
  }

  if (!layoutName) {
    return LAYOUT_CACHE['TITLE_AND_BODY']
  }

  if (LAYOUT_DICT[layoutName]) {
    let layoutNameList = LAYOUT_DICT[layoutName]

    if (Array.isArray(layoutName) === false) {
      layoutNameList = [layoutNameList]
    }

    for (let name of layoutNameList) {
      if (LAYOUT_CACHE[name]) {
        return LAYOUT_CACHE[name]
      }
    }
  }


  if (!LAYOUT_CACHE[layoutName]) {
    loadLayoutCache()
  }


  if (!LAYOUT_CACHE[layoutName]) {
    if (LAYOUT_CACHE['TITLE_AND_BODY']) {
      return LAYOUT_CACHE['TITLE_AND_BODY']
    }
    else if (LAYOUT_CACHE['TITLE_AND_BODY_1']) {
      return LAYOUT_CACHE['TITLE_AND_BODY_1']
    } 
  }
  
  return LAYOUT_CACHE[layoutName]
}



function getLayoutsList () {
  loadLayoutCache()

  return LAYOUT_CACHE
}
function findLayout(layoutName) {
  if (!LAYOUT_CACHE) {
    loadLayoutCache()
  }

  if (!layoutName) {
    return LAYOUT_CACHE['TITLE_AND_BODY']
  }

  if (LAYOUT_NAME_MAP[layoutName]) {
    layoutName = LAYOUT_NAME_MAP[layoutName]
  }

  if (LAYOUT_DICT[layoutName]) {
    let layoutNameList = LAYOUT_DICT[layoutName]

    if (Array.isArray(layoutNameList) === false) {
      layoutNameList = [layoutNameList]
    }

    // Logger.log({layoutName, layoutNameList})

    // Logger.log({keys: Object.keys(LAYOUT_CACHE_MASTER)})

    for (let name of layoutNameList) {
      if (LAYOUT_CACHE_MASTER[name]) {
        // Logger.log(`找到LAYOUT_CACHE_MASTER: ${name}`)
        return LAYOUT_CACHE_MASTER[name]
      }

      if (LAYOUT_CACHE[name]) {
        // Logger.log(`找到 LAYOUT_CACHE: ${name}`)
        return LAYOUT_CACHE[name]
      }
    }
  }

  if (LAYOUT_CACHE_MASTER[layoutName]) {
    return LAYOUT_CACHE_MASTER[layoutName]
  }


  if (!LAYOUT_CACHE[layoutName]) {
    loadLayoutCache()
  }


  if (!LAYOUT_CACHE[layoutName]) {
    // if (LAYOUT_CACHE['TITLE_AND_BODY']) {
    //   return LAYOUT_CACHE['TITLE_AND_BODY']
    // }
    // else if (LAYOUT_CACHE['TITLE_AND_BODY_1']) {
    //   return LAYOUT_CACHE['TITLE_AND_BODY_1']
    // } 
    // return findLayout('default')

    let defaultLayoutName = LAYOUT_NAME_MAP['default']

    let layoutNameList = LAYOUT_DICT[defaultLayoutName]

    if (Array.isArray(layoutName) === false) {
      layoutNameList = [layoutNameList]
    }

    // Logger.log({layoutName, layoutNameList})

    for (let name of layoutNameList) {
      if (LAYOUT_CACHE_MASTER[name]) {
        return LAYOUT_CACHE_MASTER[name]
      }

      if (LAYOUT_CACHE[name]) {
        return LAYOUT_CACHE[name]
      }
    }
  }
  
  return LAYOUT_CACHE[layoutName]
}



function getLayoutsList () {
  loadLayoutCache()

  return LAYOUT_CACHE
}

function getLayoutsMasterList () {
  loadLayoutCache()

  return LAYOUT_CACHE_MASTER
}
let LAYOUT_CACHE = null
let LAYOUT_PLACEHOLDER_MAP_CACHE = null

function findLayout(layoutName) {
  if (!LAYOUT_CACHE) {
    loadLayoutCache()
  }

  if (!layoutName) {
    return LAYOUT_CACHE['TITLE_AND_BODY']
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

function detectLayout(elements, config = {}) {
  if (!elements) {
    return findLayout('BLANK')
  }
  
  if (!Array.isArray(elements)) {
    elements = [elements]
  }

  let types = elements.map((e) => {
    let type = e.type
    if (!type) {
      type = 'TITLE'
    }
    return type
  })
  
  // types.sort((a, b) => b.localeCompare(a))

  let typesKey = types.join(',')
  // Logger.log('來找:' + typesKey)

  // =================

  if (!LAYOUT_PLACEHOLDER_MAP_CACHE) {
    loadLayoutCache(config)
  }

  if (!LAYOUT_PLACEHOLDER_MAP_CACHE[typesKey]) {
    Logger.log('重找:' + typesKey)
    loadLayoutCache(config)
  }

  if (!LAYOUT_PLACEHOLDER_MAP_CACHE[typesKey]) {
    return findLayout()
  }
  
  return LAYOUT_PLACEHOLDER_MAP_CACHE[typesKey]
}

function loadLayoutCache(config = {}) {
  let {excludeElements = []} = config


  const presentation = SlidesApp.getActivePresentation();
  const masters = presentation.getMasters();

  LAYOUT_CACHE = {}
  LAYOUT_PLACEHOLDER_MAP_CACHE = {}
  // 尋找名稱為「紫色背景區段標題」的 layout
  for (const master of masters) {
    const layouts = master.getLayouts();
    for(var item in layouts)
    {
      let name = layouts[item].getLayoutName()
      LAYOUT_CACHE[name] = layouts[item]

      const placeholders = layouts[item].getPlaceholders();
      const sortedPlaceholders = sortPlaceholders(placeholders)
      let types = sortedPlaceholders.map(i => i.type)

      if (excludeElements.length > 0) {
        // Logger.log(types)
        types = removeIfContainsAll(types, excludeElements)
        // Logger.log(types)
      }
      // types.sort((a, b) => (b + '').localeCompare(a + ''))

      let typesKey = types.join(',')

      // Logger.log(`${name} - ${typesKey} - ${excludeElements.length}`)

      if (!LAYOUT_PLACEHOLDER_MAP_CACHE[typesKey]) {
        LAYOUT_PLACEHOLDER_MAP_CACHE[typesKey] = LAYOUT_CACHE[name]
      }
    }
  }

  // Logger.log(Object.keys(LAYOUT_CACHE))
  // Logger.log(Object.keys(LAYOUT_PLACEHOLDER_MAP_CACHE).map(key => {
    // return `${key} - ${LAYOUT_PLACEHOLDER_MAP_CACHE[key].getLayoutName()}`
  // }).join('\n'))
}

function getLayoutsList () {
  loadLayoutCache()

  return LAYOUT_CACHE
}
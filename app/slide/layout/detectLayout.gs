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
  Logger.log('來找:' + typesKey)

  // =================

  if (!LAYOUT_PLACEHOLDER_MAP_CACHE) {
    loadLayoutCache(config)
  }

  if (!LAYOUT_PLACEHOLDER_MAP_CACHE[typesKey]) {
    // Logger.log('重找:' + typesKey)
    loadLayoutCache(config)
  }

  // ====================
  // 仔細比對

  // Logger.log(typesKey)

  for (let layout of LAYOUT_PLACEHOLDER_MAP_LIST) {
    let layoutTypes = layout.types
    
    if (layoutTypes.length !== types.length) {
      continue
    }

    // Logger.log(layoutTypes.join(','))

    let matched = true
    for (let i = 0; i < types.length; i++) {
      if (!layoutTypes[i].startsWith(types[i])) {
        // return layout.object
        matched = false
        break
      }
    }

    if (matched) {
      // Logger.log('找到 ' + layout.name)
      return layout.object
    }
  }

  for (let layout of LAYOUT_PLACEHOLDER_MAP_LIST) {
    let layoutTypes = layout.types
    
    if (layoutTypes.length !== types.length) {
      continue
    }

    // Logger.log(layoutTypes.join(','))

    let matched = true
    for (let i = 0; i < types.length; i++) {
      let type = types[i]
      if (type.startsWith('BODY')) {
        type = 'BODY'
      }
      if (!layoutTypes[i].startsWith(type)) {
        // return layout.object
        matched = false
        break
      }
    }

    if (matched) {
      // Logger.log('找到 ' + layout.name)
      return layout.object
    }
  }

  // ====================
  // 找不到

  if (!LAYOUT_PLACEHOLDER_MAP_CACHE[typesKey]) {
    return findLayout()
  }
  
  return LAYOUT_PLACEHOLDER_MAP_CACHE[typesKey]
}

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
    // Logger.log('重找:' + typesKey)
    loadLayoutCache(config)
  }

  if (!LAYOUT_PLACEHOLDER_MAP_CACHE[typesKey]) {
    return findLayout()
  }
  
  return LAYOUT_PLACEHOLDER_MAP_CACHE[typesKey]
}

let LAYOUT_CACHE = null
let LAYOUT_PLACEHOLDER_MAP_CACHE = null

function loadLayoutCache(config = {}) {
  let {excludeElements = []} = config


  const presentation = SlidesApp.getActivePresentation();
  const masters = presentation.getMasters();

  LAYOUT_CACHE = {}
  LAYOUT_PLACEHOLDER_MAP_CACHE = {}
  // 尋找名稱為「紫色背景區段標題」的 layout
  for (const master of masters) {
    // Logger.log({keys: Object.keys(master), name: master.toString()})

    const layouts = master.getLayouts();
    // Logger.log(Object.keys(layouts[0]))
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
      else {
        let prevName = LAYOUT_PLACEHOLDER_MAP_CACHE[typesKey].getLayoutName()
        if (prevName > name) {
          LAYOUT_PLACEHOLDER_MAP_CACHE[typesKey] = LAYOUT_CACHE[name]
        }
      }
    }
  }

  // Logger.log(Object.keys(LAYOUT_CACHE))
  // Logger.log(Object.keys(LAYOUT_PLACEHOLDER_MAP_CACHE).map(key => {
    // return `${key} - ${LAYOUT_PLACEHOLDER_MAP_CACHE[key].getLayoutName()}`
  // }).join('\n'))
}
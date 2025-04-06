let TEMPLATE_PAGE_ELEMENT_PRESENTATION = null

let TEMPLATE_PAGE_ELEMENT_KEY_MAP = {
  'SHAPE_SHADOW': ['g3404ce6e9b0_0_0', 'SHAPE'],
  'TABLE_BORDER_WHITE': ['g3404ce6e9b0_0_1', 'TABLE']
}

let TEMPLATE_PAGE_ELEMENT_CACHE = {}

function getTemplatePageElement(key) {
  if (TEMPLATE_PAGE_ELEMENT_CACHE[key]) {
    return TEMPLATE_PAGE_ELEMENT_CACHE[key]
  }

  if (!TEMPLATE_PAGE_ELEMENT_PRESENTATION) {
    TEMPLATE_PAGE_ELEMENT_PRESENTATION = SlidesApp.openById(`1viNIMWSkEJvjoOMC7rgVAkfjsUBgHeVGTbObl8Vmgc8`);
  }
  
  let config = TEMPLATE_PAGE_ELEMENT_KEY_MAP[key]

  if (!config) {
    return null
  }

  let element = TEMPLATE_PAGE_ELEMENT_PRESENTATION.getPageElementById(config[0])

  let type = config[1]
  if (type === 'SHAPE') {
    element = element.asShape()
  }
  else if (type === 'TABLE') {
    element = element.asTable()
  }

  if (!TEMPLATE_PAGE_ELEMENT_CACHE[key]) {
    TEMPLATE_PAGE_ELEMENT_CACHE[key] = element
  }
  return element
}

let TEMPLATE_PAGE_ELEMENT_PRESENTATION = null

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

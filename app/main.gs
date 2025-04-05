function markdownToSlide(md, config = {}) {
  const presentation = SlidesApp.getActivePresentation();

  let slidesConfig = parseMarkdownToSlideBlocks(md)
  
  for (let slideConfig of slidesConfig) {
    let {elements, layout, notes, types} = slideConfig

    let layoutObject
    if (!layout) {
      layoutObject = detectLayout(elements, config)
      // Logger.log(layout)
    }
    else {
      layoutObject = findLayout(layout)
    }
    
    // ==================

    const slide = presentation.appendSlide(layoutObject);

    // ==================

    if (notes) {
        const notesPage = slide.getNotesPage();
        const shape = notesPage.getSpeakerNotesShape();
        shape.getText().setText(notes);
    }

    // ==================

    const placeholders = slide.getPlaceholders();
    const sortedPlaceholders = sortPlaceholders(placeholders)
    let typesCounter = {}
    for (let i = 0; i < sortedPlaceholders.length; i++) {

      let {type, object} = sortedPlaceholders[i]
      
      if (!typesCounter[type] && typesCounter[type] !== 0) {
        typesCounter[type] = 0
      }

      if (!types[type]) {
        continue
      }

      let text = types[type][typesCounter[type]]
      if (!text) {
        continue
      }

      if (type == 'TITLE' || type == 'SUBTITLE') {
        Logger.log(`${type} | text: ${text}`)
        object.getText().setText(text);
      }
      else if (type == 'BODY') {
        setPlaceholderBody(object, text)
      }
      else if (type == 'PICTURE') {
        object.replace(text)
      }

      typesCounter[type]++
    }
  }
}


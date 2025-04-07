function markdownToSlide(md, config = {}) {
  const presentation = SlidesApp.getActivePresentation();

  let slidesConfig = parseMarkdownToSlideBlocks(md)
  
  for (let slideConfig of slidesConfig) {
    let {elements, layout, notes, types, cite} = slideConfig

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

    setNotes(slide, notes, md)

    // ==================

    const placeholders = slide.getPlaceholders();
    const sortedPlaceholders = sortPlaceholders(placeholders)

    setPlaceholders(sortedPlaceholders, types, config)

    setPlaceholderCite(sortedPlaceholders, cite)
    setPlaceholderFooter(sortedPlaceholders, config.footer)
  }
}
function markdownToSlide(md, config = {}) {
  const presentation = SlidesApp.getActivePresentation();

  let slidesConfig = parseMarkdownToSlideBlocks(md)
  
  for (let i = 0; i < slidesConfig.length; i++) {
    let {elements, layout, notes, types, cite, slideMarkdown} = slidesConfig[i]

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

    // if (i === 0) {
    //   slideMarkdown = slideMarkdown + '\n\n----\n\n' + md
    // }

    setNotes(slide, notes)
    

    // ==================

    const placeholders = slide.getPlaceholders();
    const sortedPlaceholders = sortPlaceholders(placeholders)

    setPlaceholders(sortedPlaceholders, types, config)


    const sortedPlaceholdersAll = sortPlaceholders(placeholders, {
      excludeBelowTop: 1
    })
    setPlaceholderCite(sortedPlaceholdersAll, cite)
    setPlaceholderFooter(sortedPlaceholdersAll, config.footer)
  }
}
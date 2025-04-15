function markdownToSlide(md, config = {}) {
  const presentation = SlidesApp.getActivePresentation();

  let slidesConfig = parseMarkdownToSlideBlocks(md, config)
  
  let cloneSlideCount = 0
  for (let i = 0; i < slidesConfig.length; i++) {
    let {elements, layout, notes, types, cite, clone} = slidesConfig[i]

    // Logger.log({elements, layout, notes, types, cite, clone})

    if (elements.length === 0 && !layout && !notes) {
      if (clone) {
        cloneSlide(clone, config.footer, i + cloneSlideCount)
        // continue
      }
      continue
    }

    if (elements.length === 0 && clone) {
      cloneSlide(clone, config.footer, i + cloneSlideCount)
      continue
    }

    let layoutObject
    if (!layout) {
      layoutObject = detectLayout(elements, config)
      // Logger.log(layout)
    }
    else {
      layoutObject = findLayout(layout)
    }
    
    // ==================

    const slide = insertSlide(presentation, layoutObject, i + cloneSlideCount)

    // ==================

    // if (i === 0) {
    //   slideMarkdown = slideMarkdown + '\n\n----\n\n' + md
    // }

    setNotes(slide, notes)
    

    // ==================

    const placeholders = slide.getPlaceholders();
    const sortedPlaceholders = sortPlaceholders(placeholders)

    setPlaceholders(sortedPlaceholders, types, config)


    setupLayoutHook(slide)

    // ==================


    const sortedPlaceholdersAll = sortPlaceholders(placeholders, {
      excludeBelowTop: 1
    })
    setPlaceholderCite(sortedPlaceholdersAll, cite)
    setPlaceholderFooter(sortedPlaceholdersAll, config.footer)


    // ================
      
    if (clone) {
      cloneSlideCount++
      cloneSlide(clone, config.footer, i + cloneSlideCount)
      
      // continue
    }

  }
}
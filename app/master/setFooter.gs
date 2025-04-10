function setFooter(text) {
  const presentation = SlidesApp.getActivePresentation();
  const slides = presentation.getSlides()

  for (let i = 1; i < slides.length; i++) {
    const slide = slides[i]
    const placeholders = slide.getPlaceholders();

    const sortedPlaceholdersAll = sortPlaceholders(placeholders, {
      excludeBelowTop: 1
    })
    setPlaceholderFooter(sortedPlaceholdersAll, text)
  }
}

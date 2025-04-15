function insertSlide(presentation, layoutObject, offset = 0) {
  const currentIndex = getCurrentSlideIndex()
  let slide
  if (currentIndex === -1) {
    slide = presentation.appendSlide(layoutObject);
  }
  else {
    slide = presentation.insertSlide(currentIndex + 1 + offset, layoutObject)
  }
  
  return slide
}
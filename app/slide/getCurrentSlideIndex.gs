function getCurrentSlideIndex() {
  const presentation = SlidesApp.getActivePresentation()
  const selection = presentation.getSelection();
  const currentPage = selection.getCurrentPage();
  const slide = currentPage.asSlide()
  const slideID = slide.getObjectId()


  const slides = presentation.getSlides()
  for (let i = 0; i < slides.length; i++) {
    if (slides[i].getObjectId() === slideID) {
      // Logger.log("目前 Slide 的 index 是：" + i);
      return i;
    }
  }

  // Logger.log("找不到目前的 Slide");
  return -1;
}

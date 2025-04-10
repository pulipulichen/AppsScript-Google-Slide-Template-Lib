function checkImageOrientation(imageUrl) {
  try {
    const presentation = SlidesApp.getActivePresentation()
    const slides = presentation.getSlides()
    const slide = slides[(slides.length - 1)]

    const image = slide.insertImage(imageUrl)

    const width = image.getWidth();
    const height = image.getHeight();

    image.remove()

    // 判斷圖片方向
    if (width < height) {
      return 'portrait';
    } else {
      return 'landscape';
    }
  } catch (e) {
    Logger.log(e);
    return 'Error: ' + e.message;
  }
}

function setPlaceholderPicture(shape, markdown) {
  if (typeof(shape.asShape) === 'function') {
    shape = shape.asShape()
  }

  let imageURL = extractImageURLFromMarkdown(markdown)

  // @TODO 這是Google Apps Script控制Google Slide
  // 1. 偵測shape的範圍
  // 2. 插入一樣寬度的圖片，網址用imageURL
  // 3. 將圖片裁切，高度設為跟shape一樣
  // let shapeWidth = shape.getWidth();
  // let shapeHeight = shape.getHeight();
  // let shapeTop = shape.getTop();
  // let shapeLeft = shape.getLeft();

  // let slide = shape.getParentPage();

  // // let image = slide.insertImage(imageURL, shapeLeft, shapeTop, shapeWidth, shapeHeight);
  // let image = slide.insertImage(imageURL, shapeLeft, shapeTop, shapeWidth, shapeHeight);
  // image.setWidth(width);
  // image.setHeight(height);

  // 裁切圖片，使其高度與 shape 相同
  // let imageHeight = image.getHeight();
  // if (imageHeight > height) {
  //   let cropOffset = (imageHeight - height) / imageHeight / 2;
  //   image.crop(0, cropOffset, 0, cropOffset);
  // }
  
  shape.replaceWithImage(imageURL, true)
}

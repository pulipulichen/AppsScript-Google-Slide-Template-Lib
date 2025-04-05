function setPlaceholderPicture(shape, markdown) {
  if (typeof(shape.asShape) === 'function') {
    shape = shape.asShape()
  }

  let imageURL = extractImageURLFromMarkdown(markdown)

  // @TODO 這是Google Apps Script控制Google Slide 
  // 1. 偵測shape的範圍
  // 2. 插入一樣寬度的圖片，網址用imageURL
  // 3. 將圖片裁切，高度設為跟shape一樣
}

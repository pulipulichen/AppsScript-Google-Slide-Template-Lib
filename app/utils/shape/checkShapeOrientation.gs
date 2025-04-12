function checkShapeOrientation(shape) {
  try {
    
    const width = shape.getWidth();
    const height = shape.getHeight();

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

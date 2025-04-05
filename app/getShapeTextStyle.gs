function getShapeTextStyle(shape) {
  let textStyle = shape.getText().getTextStyle()

  return {
    fontSize: textStyle.getFontSize(),
    fontColor: textStyle.getForegroundColor(),
  }
}
function listLayouts() {
  const presentation = SlidesApp.getActivePresentation();

  let layouts = getLayoutsList()

  for (let name of Object.keys(layouts)) {
    let layoutObject = layouts[name]
    const slide = presentation.appendSlide(layoutObject);

    const textBox = slide.insertTextBox(name, 0, 0, presentation.getPageWidth(), parseInt(presentation.getPageHeight() / 3))
    textBox.setContentAlignment(SlidesApp.ContentAlignment.MIDDLE)

    // textBox.getFill().setAlpha(0.5); // 半透明背景
    let textRange = textBox.getText()
    let paragraphStyle = textRange.getParagraphStyle()
    const textStyle = textRange.getTextStyle();
    textStyle.setFontSize(parseInt(presentation.getPageHeight() / 7)); // 文字大小
    textStyle.setBold(true);
    textStyle.setForegroundColor("#FFFFFF");

    paragraphStyle.setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER)

    textBox.getFill().setSolidFill('#666666', 0.5)
    // textStyle.setForegroundColor(SlidesApp.ColorType.WHITE); // 文字顏色
    // textBox.getText().setText(name); // 設定文字內容

    // let autofit = textBox.getAutofit()
    // Logger.log(autofit)
    // Logger.log(autofit.getAutofitType())
    // Logger.log(autofit.getFontScale())
    // autofit.disableAutofit()

    textBox.alignOnPage(SlidesApp.AlignmentPosition.CENTER)

    // break
  }
}

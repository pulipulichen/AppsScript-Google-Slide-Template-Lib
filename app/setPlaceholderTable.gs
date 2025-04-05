function setPlaceholderTable (shape, tableMarkdown) {
  if (typeof(shape.asShape) === 'function') {
    shape = shape.asShape()
  }

  let shapeStyle = getShapeTextStyle(shape)
  
  let fontSize = parseInt(shapeStyle.fontSize * 0.9)

  try {
    // 解析 Markdown 表格
    const tableData = parseMarkdownTable(tableMarkdown);
    Logger.log(tableData)

    if (!tableData) {
      console.error('無法解析 Markdown 表格');
      return;
    }

    // 建立表格
    const table = shape.getParentPage()
      .insertTable(
        tableData.rows, 
        tableData.cols, 
        shape.getLeft(),
        shape.getTop(),
        shape.getWidth(),
        shape.getHeight()
      );

    let headersLength = tableData.headers.length
    for (let row = 0; row < tableData.rows; row++) {
      for (let col = 0; col < tableData.cols; col++) {
        const cell = table.getRow(row).getCell(col);

        let text
        if (row < headersLength) {
          text = tableData.headers[row][col]
        }
        else {
          text = tableData.data[(row - headersLength)][col]
        }
        let textRange = cell.getText()
        textRange.setText(text);

        let fill = cell.getFill()

        let textStyle = textRange.getTextStyle()
        let paragraphStyle = textRange.getParagraphStyle()

        

        textStyle.setFontSize(fontSize)
        paragraphStyle.setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER)
        cell.setContentAlignment(SlidesApp.ContentAlignment.MIDDLE)

        // 設定標頭顏色
        if (row < headersLength) {
          fill.setSolidFill(SlidesApp.ThemeColorType.DARK2); // 深藍色
          textStyle.setForegroundColor("#FFFFFF"); // 白色字
          textStyle.setBold(true)
        } else {
          // 設定內容顏色
          if ((row - headersLength) % 2 === 0) {
            fill.setSolidFill(SlidesApp.ThemeColorType.LIGHT1); // 淺藍色，用於交替行
          } else {
            fill.setSolidFill("#f3f3f3"); // 淺灰色
          }
          textStyle.setForegroundColor(shapeStyle.fontColor)
        }
      }
    }

  } catch (e) {
    console.error('設定表格時發生錯誤：', e);
  }
}

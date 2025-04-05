
/**
輸入的資料例如：

| 欄位1 | 欄位2 | 欄位3 | 欄位4 | 欄位5 |
|---|---|---|---|---|
| 資料1-1 | 資料1-2 | 資料1-3 | 資料1-4 | 資料1-5 |
| 資料2-1 | 資料2-2 | 資料2-3 | 資料2-4 | 資料2-5 |
| 資料3-1 | 資料3-2 | 資料3-3 | 資料3-4 | 資料3-5 |
| 資料4-1 | 資料4-2 | 資料4-3 | 資料4-4 | 資料4-5 |
| 資料5-1 | 資料5-2 | 資料5-3 | 資料5-4 | 資料5-5 |
| 資料6-1 | 資料6-2 | 資料6-3 | 資料6-4 | 資料6-5 |
| 資料7-1 | 資料7-2 | 資料7-3 | 資料7-4 | 資料7-5 |
 */
function parseMarkdownTable(tableMarkdown) {
  try {
    const lines = tableMarkdown.trim().split('\n');
    let headers = [];
    const rows = [];
    let cols = 0;

    // 處理表頭
    // if (lines.length > 0 && lines[0].trim().startsWith('|')) {
    //   header = lines[0].trim().split('|').slice(1, -1).map(cell => cell.trim());
    // }

    let hasHeader = tableMarkdown.includes('|-') && tableMarkdown.includes('-|')
    let isHeaderRow = hasHeader

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (i > 0 && lines[i].trim().split('|').slice(1, -1).every(cell => cell.trim().startsWith('-'))) {
        isHeaderRow = false
        continue;
      }
      else if (line.trim().startsWith('|')) {
        const cells = line.trim().split('|').slice(1, -1).map(cell => cell.trim());
        if (isHeaderRow) {
          headers.push(cells)
        }
        else {
          rows.push(cells)
        }
        cols = Math.max(cols, cells.length);
      }
    }

    if (rows.length === 0 || cols === 0) {
      return null;
    }

    const data = rows.map(row => {
      while (row.length < cols) {
        row.push(''); // 補齊不足的欄位
      }
      return row;
    });

    return {
      rows: rows.length,
      cols: cols,
      data: data,
      headers: headers // 包含表頭
    };
  } catch (e) {
    console.error('解析 Markdown 表格時發生錯誤：', e);
    return null;
  }
}

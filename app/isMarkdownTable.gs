/*
例如：

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
function isMarkdownTable(markdown) {
  markdown = markdown.trim()

  const lines = markdown.split('\n');
  if (lines.length < 2) {
    return false;
  }

  const headerLine = lines[0];
  const separatorLine = lines[1];

  if (!headerLine.startsWith('|') || !headerLine.endsWith('|')) {
    return false;
  }

  if (!separatorLine.startsWith('|') || !separatorLine.endsWith('|')) {
    return false;
  }

  const headerColumns = headerLine.split('|').filter(col => col.trim() !== '');
  const separatorColumns = separatorLine.split('|').filter(col => col.trim() !== '');

  if (headerColumns.length !== separatorColumns.length) {
    return false;
  }

  for (const separatorColumn of separatorColumns) {
    if (!/^-+$/.test(separatorColumn.trim())) {
      return false;
    }
  }

  return true;
}

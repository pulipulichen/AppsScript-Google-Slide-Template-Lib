function isMarkdownPicture(markdown) {
  if (!markdown) {
    return false;
  }

  markdown = markdown.trim()
  // Logger.log('isMarkdownPicture: ' + markdown)
  // 檢查是否為 Markdown 圖片的條件：以 '!' 開頭，包含 '](', 以 ')' 結尾，並且不包含換行符
  return markdown.startsWith('![') && markdown.includes('](') && markdown.endsWith(')') && !markdown.includes('\n');
}

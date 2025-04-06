/*
例如：

```smartart:td

- 第一點
- 第二點
- 第三點

```
*/
function isMarkdownSmartArt(markdown) {
  markdown = markdown.trim()

  return (markdown.startsWith('```') && markdown.includes("```smartart") && markdown.endsWith('```'));
}

/*
例如：

```py
print("Hello World.")
```
*/
function isMarkdownCode(markdown) {
  markdown = markdown.trim()

  return (markdown.startsWith('```') && markdown.endsWith('```'));
}

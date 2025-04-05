function isMarkdownPicture(markdown) {
  if (!markdown) {
    return false;
  }

  markdown = markdown.trim()
  return markdown.startsWith('![') && markdown.includes('](') && markdown.endsWith(')');
}
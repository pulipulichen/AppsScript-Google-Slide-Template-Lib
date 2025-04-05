
function extractImageURLFromMarkdown (markdown) {
  const imageUrl = markdown.match(/^!\[.*?\]\((.*?)\)/)[1];
  return imageUrl
}

function extractImageURLFromMarkdown (markdown, config = {}) {
  let imageUrl = markdown.match(/^!\[.*?\]\((.*?)\)/)[1];

  if (imageUrl.startsWith('"') || imageUrl.startsWith(`'`)) {
    imageUrl = imageUrl.slice(1)
  }

  if (imageUrl.endsWith('"') || imageUrl.endsWith(`'`)) {
    imageUrl = imageUrl.slice(0, -1)
  }

  if (!imageUrl.startsWith('https://') && !imageUrl.startsWith('http://')  && config.baseUrl) {
    if (imageUrl.startsWith('./')) {
      imageUrl = imageUrl.slice(2)
    }

    if (!config.baseUrl.endsWith('/')) {
      config.baseUrl = config.baseUrl + '/'
    }
    imageUrl = config.baseUrl + imageUrl
  }

  return imageUrl
}
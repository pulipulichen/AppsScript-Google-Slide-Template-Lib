function parseMarkdownListTree(markdown) {
  let basicList = parseMarkdownList(markdown)

  let output = []

  for (let item of basicList) {
    if (item.level === 0) {
      output.push(item)
      continue
    }

    let lastItem = output[(output.length - 1)]
    
    if (!lastItem.title) {
      lastItem.title = lastItem.text
    }

    if (!lastItem.subtitle) {
      lastItem.subtitle = item.text
    }
    else {
      lastItem.subtitle = lastItem.subtitle + '\n' + item.text
    }
  }
  return output
}
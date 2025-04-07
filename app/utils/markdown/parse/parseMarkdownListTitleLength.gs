function parseMarkdownListTitleLength(list) {
  let titleLength = 0
  for (let i = 0; i < list.length; i++) {
    let {title} = list[i]

    if (title && title.length > titleLength) {
      titleLength = title.length
    }
  }

  return list
}
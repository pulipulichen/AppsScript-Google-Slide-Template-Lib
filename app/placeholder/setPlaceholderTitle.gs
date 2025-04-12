function setPlaceholderTitle(object, text) {
  let {title, small, position} = parseMarkdownTitle(text)
  // Logger.log()

  if (!small) {
    object.getText().setText(text);
  }
  else {
    let textRange = object.getText()
    let smallRatio = 0.8

    if (position === 'start') {
      textRange.setText(small)
      textRange.appendParagraph(title)

      let paragraphs = textRange.getParagraphs()
      setPlaceholderTitleSmall(paragraphs[0], smallRatio)
    }
    else {
      textRange.setText(title)
      textRange.appendParagraph(small)

      let paragraphs = textRange.getParagraphs()
      setPlaceholderTitleSmall(paragraphs[1], smallRatio)
    }
  }

  return object
}

function setPlaceholderTitleSmall(paragraph, smallRatio) {
  let textStyle = paragraph.getRange().getTextStyle()
  let fontSize = textStyle.getFontSize()
  textStyle.setFontSize(fontSize * smallRatio)
  textStyle.setBold(false)
}

function parseMarkdownTitle(line) {
  line = line.trim()
  const smallRegex = /<small>(.*?)<\/small>/i;
  const match = line.match(smallRegex);

  if (match) {
    const small = match[1];
    const smallTag = match[0];
    const startIndex = line.indexOf(smallTag);

    let position = null;
    if (startIndex === 0) {
      position = "start";
    } else if (startIndex + smallTag.length === line.length) {
      position = "end";
    } else {
      position = "middle";
    }

    const title = line.replace(smallRegex, '').trim();
    return { title, small, position };
  } else {
    return { title: line.trim(), small: null, position: null };
  }
}

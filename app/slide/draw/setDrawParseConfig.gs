function setDrawParseConfig(draw) {
  draw = draw.trim()

  let pos = draw.indexOf(' ')
  if (pos === -1) {
    return {
      type: draw
    }
  }

  let type = draw.slice(0, pos).trim()
  let text = draw.slice(pos).trim()

  return {
    type,
    text
  }
}
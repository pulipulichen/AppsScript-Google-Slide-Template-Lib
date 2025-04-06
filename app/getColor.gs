/**
 * 
 * @param palette theme, blue, ye
 *  
 * 
 * @param index 
 * @param gradient 
 */
function getColor(index = 0, config = {}) {
  let {
    palette = "theme", 
    sequential = false, 
    reverse = false,
    invert = false
  } = config

  palette = PALETTES_DICT[palette]

  if (!palette) {
    palette = PALETTES_DICT.theme
  }

  if (reverse) {
    palette.reverse()
  }

  let colorCount = palette.length

  let color
  if (sequential === true) {
    index = index % colorCount
    color = palette[index]
  }
  else {
    if (index > 1) {
      index = 1
    }
    let percentIndex = Math.round((colorCount - 1) * index)
    color = palette[percentIndex]
  }
  
  if (invert) {
    let anotherColor = {
      foreground: color.background,
      background: color.foreground
    }
    color = anotherColor
  }

  // Logger.log({color, index, percentIndex, colorCount, palette_key})
  return color
}

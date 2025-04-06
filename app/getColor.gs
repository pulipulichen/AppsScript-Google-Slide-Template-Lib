/**
 * 
 * @param palette theme, blue, ye
 *  
 * 
 * @param index 
 * @param gradient 
 */
function getColor(index = 0, palette_key = "theme", reverse = false, sequential = false) {
  let palette = PALETTES_DICT[palette_key]

  if (!palette) {
    palette = PALETTES_DICT.theme
  }

  if (reverse) {
    palette.reverse()
  }

  let colorCount = palette.length

  if (sequential === true) {
    index = index % colorCount
    return palette[index]
  }

  if (index > 1) {
    index = 1
  }
  let percentIndex = Math.round((colorCount - 1) * index)
  let color = palette[percentIndex]
  Logger.log({color, index, percentIndex, colorCount, palette_key})
  return color
}

// https://www.heavy.ai/blog/12-color-palettes-for-telling-better-stories-with-your-data
PALETTES_DICT = {
  'theme': [SlidesApp.ThemeColorType.ACCENT1, SlidesApp.ThemeColorType.ACCENT2, SlidesApp.ThemeColorType.ACCENT3, SlidesApp.ThemeColorType.ACCENT4, SlidesApp.ThemeColorType.ACCENT5, SlidesApp.ThemeColorType.ACCENT6],
  'Retro Metro': ["#ea5545", "#f46a9b", "#ef9b20", "#edbf33", "#ede15b", "#bdcf32", "#87bc45", "#27aeef", "#b33dc6"],
  'Dutch Field': ["#e60049", "#0bb4ff", "#50e991", "#e6d800", "#9b19f5", "#ffa300", "#dc0ab4", "#b3d4ff", "#00bfa0"],
  "River Nights": ["#b30000", "#7c1158", "#4421af", "#1a53ff", "#0d88e6", "#00b7c7", "#5ad45a", "#8be04e", "#ebdc78"],
  "Spring Pastels": ["#fd7f6f", "#7eb0d5", "#b2e061", "#bd7ebe", "#ffb55a", "#ffee65", "#beb9db", "#fdcce5", "#8bd3c7"],
  "Blue to Yellow": ["#115f9a", "#1984c5", "#22a7f0", "#48b5c4", "#76c68f", "#a6d75b", "#c9e52f", "#d0ee11", "#d0f400"],
  "Grey to Red": ["#d7e1ee", "#cbd6e4", "#bfcbdb", "#b3bfd1", "#a4a2a8", "#df8879", "#c86558", "#b04238", "#991f17"],
  "Black to Pink": ["#2e2b28", "#3b3734", "#474440", "#54504c", "#6b506b", "#ab3da9", "#de25da", "#eb44e8", "#ff80ff"],
  "Blues": ["#0000b3", "#0010d9", "#0020ff", "#0040ff", "#0060ff", "#0080ff", "#009fff", "#00bfff", "#00ffff"],
  "Blue to Red": ["#1984c5", "#22a7f0", "#63bff0", "#a7d5ed", "#e2e2e2", "#e1a692", "#de6e56", "#e14b31", "#c23728"],
  "Orange to Purple": ["#ffb400", "#d2980d", "#a57c1b", "#786028", "#363445", "#48446e", "#5e569b", "#776bcd", "#9080ff"],
  "Pink Foam": ["#54bebe", "#76c8c8", "#98d1d1", "#badbdb", "#dedad2", "#e4bcad", "#df979e", "#d7658b", "#c80064"],
  "Salmon to Aqua": ["#e27c7c", "#a86464", "#6d4b4b", "#503f3f", "#333333", "#3c4e4b", "#466964", "#599e94", "#6cd4c5"]
}
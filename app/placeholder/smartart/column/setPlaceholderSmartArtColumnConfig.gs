function setPlaceholderSmartArtColumnConfig(config) {

  let {
    // palette = "theme",
    // colorReverse = false,
    // colorInvert = true
    layout = {},
    color = {},
    size = null,
  } = config


  // ===========================
  
  if (!config.width) {
    config.width = 1
  }

  if (!config.height) {
    config.height = 1
  }

  // ===========================

  if (typeof(layout) === 'string') {
    layout = {
      direction: layout
    }
  }

  let layoutConfig = {
    direction: '46', 
    arrow: false,
    height: config.height,
    width: config.width,
    size: size,
    ...layout
  }

  if (layoutConfig.size) {
    layoutConfig.width = layoutConfig.size
    layoutConfig.height = layoutConfig.size
  }

  // ===========================

  if (typeof(color) === 'string') {
    color = {
      palette: color
    }
  }

  let colorConfig = {
    palette: 'blue', 
    reverse: false, 
    sequential: false,
    invert: true,
    ...color
  }

  return {
    layoutConfig, 
    colorConfig
  }
}

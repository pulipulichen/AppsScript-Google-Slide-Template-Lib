function setPlaceholderSmartArtHamburgerConfig(config) {

  let {
    // palette = "theme",
    // colorReverse = false,
    // colorInvert = true
    layout = {},
    color = {}
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
    direction: '73', 
    arrow: false,
    height: config.height,
    width: config.width,
    ...layout
  }

  // ===========================

  if (typeof(color) === 'string') {
    color = {
      palette: color
    }
  }

  let colorConfig = {
    palette: 'theme', 
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

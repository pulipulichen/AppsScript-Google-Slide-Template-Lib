function findLayoutByID(layoutID) {
  if (!layoutID) {
    return false
  }

  Logger.log({layoutID})

  if (!LAYOUT_CACHE) {
    loadLayoutCache()
  }

  let layoutNames = Object.keys(LAYOUT_DICT)

  let targetName
  for (let layoutName of layoutNames) {
    for (let id of LAYOUT_DICT[layoutName]) {
      if (id === layoutID) {
        targetName = layoutName
        break
      }
    }
  }

  Logger.log({targetName})

  if (targetName) {
    return findLayout(targetName)
  }
  return false
}

function setupLayoutHook (slide) {
  let layout = slide.getLayout()
  let masterID = layout.getMaster().getObjectId()
  let fullLayoutID = masterID + '_' + layout.getLayoutName()

  if (LAYOUT_HOOKS[fullLayoutID]) {
    LAYOUT_HOOKS[fullLayoutID](slide)
  }
}
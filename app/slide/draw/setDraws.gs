function setDraws(slide, draws) {
  for (let draw of draws) {
    let {type, text} = setDrawParseConfig(draw)

    type = 'DRAW_' + type

    let shape = getTemplatePageElement(type)
    shape = slide.insertShape(shape)

    shape.setLeft(0)
    shape.setTop(0)

    if (text && text.length > 0) {

      shape.getText().setText(text)
    }
  }
}


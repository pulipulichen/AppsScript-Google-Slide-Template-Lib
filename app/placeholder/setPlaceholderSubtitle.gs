function setPlaceholderSubtitle(object, text) {
  object.getText().setText(text);

  object.getText().getParagraphStyle().setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER)
  return object
}

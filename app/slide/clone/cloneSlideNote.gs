function cloneSlideNote(sourceSlide, slide) {
  const notesPage = slide.getNotesPage();
  const shape = notesPage.getSpeakerNotesShape();
  shape.getText().setText(sourceSlide.getNotesPage().getSpeakerNotesShape().getText().asRenderedString());
}
function setNotes(slide, notes) {
  if (notes) {
    const notesPage = slide.getNotesPage();
    const shape = notesPage.getSpeakerNotesShape();
    shape.getText().setText(notes);
  }
}
function setNotes(slide, notes) {
  if (notes) {
    const notesPage = slide.getNotesPage();
    const shape = notesPage.getSpeakerNotesShape();

    const textRange = shape.getText()
    const text = textRange.asRenderedString().trim()

    if (text !== '') {
      notes = notes + '\n\n====\n\n' + text
    }
    shape.getText().setText(notes);
  }
}
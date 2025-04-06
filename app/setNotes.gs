function setNotes(slide, notes, md) {
  if (!notes) {
    notes = md
  }
  else {
    notes = notes + '\n----\n' + md
  }

  if (notes) {
    const notesPage = slide.getNotesPage();
    const shape = notesPage.getSpeakerNotesShape();
    shape.getText().setText(notes);
  }
}
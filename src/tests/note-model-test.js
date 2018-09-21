(function(exports) {
  function testNoteText() {
    var note = new Note("hello");
    if (note.text !== "hello") {
      throw new Error("Text does not match")
    }
  }
  testNoteText();

  function testNoteTextMethod() {
    var note = new Note("hello");
    if (note.getNoteText() !== "hello") {
      throw new Error("Text does not match")
    }
  }
  testNoteTextMethod();

  function testNoteTextId() {
    var note = new Note("hello")
    if(note.getNoteTextId() !== 7) {
      throw new Error("Id not matching")
    } else {
    }
  }
  testNoteTextId()

})(this);
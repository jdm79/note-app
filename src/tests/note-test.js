(function (exports) {
  function testNoteIsHelloWorld() {
    var note = new Note("hello world");
    assert.isTrue(note.text === "hello world")
  }  

  testNoteIsHelloWorld()

})(this)

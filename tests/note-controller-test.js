(function(exports) {
  function testNoteController() {
    var noteController = new NoteController()
    assert.isTrue(noteController)
  }

  function testNoteControllerInnerHTML() {
    var noteList = new NoteListModel()
    var note1 = new Note('haribo')
    var note2 = new Note('congee')
    var note3 = new Note('door')
    noteList.add(note1.text)
    noteList.add(note2.text)
    noteList.add(note3.text)
    var noteController = new NoteController(noteList)
    noteController.listItems()
    var htmlString =  `<ul><li><div>haribo</div></li><li><div>congee</div></li><li><div>door</div></li></ul>`
    innerHTML = document.getElementById('list-items').innerHTML  
    assert.isTrue(innerHTML === htmlString)
  }

  testNoteController()
  testNoteControllerInnerHTML()
})(this)

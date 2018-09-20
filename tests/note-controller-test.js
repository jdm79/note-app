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
    var htmlString =  `<ul class="list-group"><li class="list-group-item"><div>haribo</div></li><li class="list-group-item"><div>congee</div></li><li class="list-group-item"><div>door</div></li></ul>`
    innerHTML = document.getElementById('list-items').innerHTML  
    console.log(innerHTML)
    assert.isTrue(innerHTML === htmlString)
  }

  testNoteController()
  testNoteControllerInnerHTML()
})(this)

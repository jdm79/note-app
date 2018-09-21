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
    noteList.add(note1)
    noteList.add(note2)
    noteList.add(note3)
    var noteController = new NoteController(noteList)
    noteController.listItems()
    var htmlString =  `<ul class="list-group"><a href="#notes/8"><li class="list-group-item"><div>haribo</div></li></a><a href="#notes/9"><li class="list-group-item"><div>congee</div></li></a><a href="#notes/10"><li class="list-group-item"><div>door</div></li></a></ul>`
    innerHTML = document.getElementById('list-items').innerHTML  
    assert.isTrue(innerHTML === htmlString)
  }

  testNoteController()
  testNoteControllerInnerHTML()
})(this)

(function(exports) {
  function testNoteListView() {

    function NoteListModelDouble() {};

    NoteListModelDouble.prototype = {
      show: function() {
        return ['some haribo', 'some congee']
      }
    }
    
    noteListModelDouble = new NoteListModelDouble()

    var htmlString =  `<ul class="list-group"><li class="list-group-item"><div>some haribo</div></li><li class="list-group-item"><div>some congee</div></li></ul>`
    var noteListView = new NoteListView(noteListModelDouble) 
    assert.isTrue(noteListView.htmlize(noteListModelDouble.show()) === htmlString )
  
  }
  testNoteListView()
})(this)


(function(exports) {
  function testNoteListView() {

    function NoteListModelDouble() {};

    NoteListModelDouble.prototype = {
      show: function() {
        return [note1 = {text: 'some haribo' , id:1}, note2 = {text:'some congee', id:2}]
      }
    }
    
    noteListModelDouble = new NoteListModelDouble()

    var htmlString =  `<ul class="list-group"><a href="#notes/1"><li class="list-group-item"><div>some haribo</div></li></a><a href="#notes/2"><li class="list-group-item"><div>some congee</div></li></a></ul>`
    var noteListView = new NoteListView(noteListModelDouble) 

    assert.isTrue(noteListView.htmlize(noteListModelDouble.show()) === htmlString )
  
  }
  testNoteListView()

 
})(this)


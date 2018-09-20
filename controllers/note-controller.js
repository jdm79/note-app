(function(exports){

  function NoteController(list, view = new NoteListView()) {
    this._noteList = list
    this._noteListView = view
  }

  NoteController.prototype.listItems = function() {
    var listItems = document.getElementById('list-items')    
    listItems.innerHTML = this._noteListView.htmlize(this._noteList.show())
  }

  exports.NoteController = NoteController
})(this)

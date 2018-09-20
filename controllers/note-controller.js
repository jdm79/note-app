(function(exports){

  function NoteController(list, view = new NoteListView()) {
    this._noteList = list
    this._noteListView = view
  }
  NoteController.prototype.setEventListeners = function(){
    document.getElementById('submit')
      .addEventListener('submit', this.log(event));

  }

  NoteController.prototype.log = function(event){
    console.log("this button has been clicked")
    event.preventDefault();

  }

  NoteController.prototype.listItems = function() {
    var listItems = document.getElementById('list-items')    
    listItems.innerHTML = this._noteListView.htmlize(this._noteList.show())
  }



  exports.NoteController = NoteController
})(this)

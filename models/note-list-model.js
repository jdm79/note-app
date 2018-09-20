(function(exports) {
  function NoteListModel() {
    this.notes = []
  }    

    NoteListModel.prototype.add = function(note) {
      this.notes.push(note)
    }
    NoteListModel.prototype.show = function() {
      return this.notes
    }

  exports.NoteListModel = NoteListModel
})(this)

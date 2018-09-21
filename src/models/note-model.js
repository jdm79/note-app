(function(exports) {

  var idcounter = 1

  function Note(text) {
    this.text = text
    
    this.id = idcounter++
  }

  Note.prototype.getNoteText = function() {
    return this.text
  }

  Note.prototype.getNoteTextId = function() {
    return this.id
  }

  exports.Note = Note;
})(this);
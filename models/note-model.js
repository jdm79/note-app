(function(exports) {

  var idcounter = 1
  
  function Note(text) {
    this.text = text
    this.id = idcounter++
  }

  exports.Note = Note;
})(this);
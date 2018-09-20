(function(exports){
  function NoteListView() {}

  NoteListView.prototype.htmlize = function(array){
    htmls = [`<ul class="list-group">`]
    array.forEach(function(item) {
      htmls.push(`<li class="list-group-item"><div>${item}</div></li>`)
    })
    htmls.push(`</ul>`)
    return htmls.join('')
  }

  exports.NoteListView = NoteListView
})(this)
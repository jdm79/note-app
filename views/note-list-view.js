(function(exports){
  function NoteListView() {}

  NoteListView.prototype.htmlize = function(array){
    htmls = [`<ul>`]
    array.forEach(function(item) {
      htmls.push(`<li><div>${item}</div></li>`)
    })
    htmls.push(`</ul>`)
    return htmls.join('')
  }

  exports.NoteListView = NoteListView
})(this)
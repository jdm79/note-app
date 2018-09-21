(function(exports){
  function NoteListView() {}

  NoteListView.prototype.htmlize = function(array){
    htmls = [`<ul class="list-group">`]
    array.forEach(function(item) {
      
      htmls.push(`<a href="#notes/${item.id}"><li class="list-group-item"><div>${item.text}</div></li></a>`)
    })
    htmls.push(`</ul>`)
    return htmls.join('')
  }

  exports.NoteListView = NoteListView
})(this)
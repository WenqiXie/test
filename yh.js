var e = function(selector) {
  return document.querySelector(selector)
}

var es = function(selector) {
  return document.querySelectorAll(selector)
}

var bindAll = function(elements, e, fun) {
  for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener(e, fun)
  }
}

var removeClassAll = function(className) {
  var cs = es("." + className)
  if (cs.length > 0) {
    for (var i = 0; i < cs.length; i++) {
      cs[i].classList.remove(className)
    }
  }
}

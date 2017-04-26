var addButton = e("#add-todo")
var container = e("#id-todo-container")
bindEvent(addButton, 'click', function() {
  var input = e('#input-todo')
  var todo = input.value
  console.log('todo', todo);
  // 在页面 插入 html 元素
  var t = template(todo)
  container.insertAdjacentHTML('beforeend', t);
})

document.createElement('div')

var template = function(form) {
  var t = `
  <div class="todo-cell">
    <button id="todo-finish" name="button">完成</button>
    <button id="todo-delete" name="button">删除</button>
    <span>${form}</span>
  </div>
  `
  return t
}

bindEvent(container, 'click', function() {
  var target = event.target
  let id = target.id
  console.log('id', id);
  var todoCell = target.closest(".todo-cell")
  if (id == "todo-finish") {
    todoCell.classList.toggle('finished')
  } else if(id == "todo-delete") {
    todoCell.remove()
  }
})

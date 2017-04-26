var addButton = e("#add-todo")
var container = e("#id-todo-container")
bindEvent(addButton, 'click', function() {
  var input = e('#input-todo')
  var todo = input.value
  console.log('todo', todo);
  // 在页面 插入 html 元素
  let form = {
      content: todo,
      state: false,
  }
  forms[forms.length] = form
  console.log('forms', forms);
  saveTodo()
  var t = template(todo, forms.length, form.state)
  container.insertAdjacentHTML('beforeend', t);
})

document.createElement('div')

var template = function(form, index, state) {
  console.log('state', state);
  if (state) {
    state = 'finished'
  } else {
    state = ''
  }
  console.log('state', state);
  var t = `
  <div data-index=${index} class="todo-cell ${state}">
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
  let index = todoCell.dataset.index
  if (id == "todo-finish") {
    // 点击了 完成 按钮
    todoCell.classList.toggle('finished')

    console.log('forms[index].state', forms[index].state);
    forms[index].state = !forms[index].state
    console.log('forms[index].state', forms[index].state);
  } else if(id == "todo-delete") {
    // 点击了 删除 按钮
    todoCell.remove()

    delete forms[index]
  }
  saveTodo()
})

// localStorage 部分

if (localStorage.todos == undefined) {
  localStorage.todos = '[]'
}

var getTodos = function() {
  var forms = JSON.parse(localStorage.todos)
  return forms
}

var forms = getTodos()

var saveTodo = function() {
  localStorage.todos = JSON.stringify(forms)
  // ajax(forms)
}

// var bs = es('button')
// bindAll(bs, 'click', saveTodo)

var addTodoAll = function() {
  let html = ''
  for (var i = 0; i < forms.length; i++) {
    let form = forms[i]
    console.log('form', form);
    if (form != null) {
      var t = template(form.content, i, form.state)
      html += t
    }
  }
  container.innerHTML = html
}
addTodoAll()

Vue.component('todo-item', {
  template: '<li>This is a todo</li>'
});

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    groceryList: [
      {text: "Object 1"},
      {text: "Object 2"},
      {text: "Object 3"}
    ]
  }
})

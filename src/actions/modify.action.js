import store from '../store'

let id = 0

export function addTodo(item) {
  store.dispatch({
    type: 'ADD_TODO',
    payload: {
      id: id++,
      value: item,
      checked: false
    }
  })
}

export function removeTodo(id) {
  store.dispatch({
    type: 'REMOVE',
    payload: id
  })
}

export function setFilter(type) {
  store.dispatch({
    type: 'CHANGE_FILTER',
    payload: type
  })
}

export function modifyList(todo) {
  store.dispatch({
    type: 'MODIFY_TODO',
    payload: {
      id: todo.id,
      value: todo.value,
      checked: todo.checked
    }
  })
}
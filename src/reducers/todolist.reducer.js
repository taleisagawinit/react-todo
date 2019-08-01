const initialState = {
  todos: [],
  filter: 'all'
}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state, 
        todos: [...state.todos,action.payload], 
      }
    case 'REMOVE':
      return {
        ...state, 
        todos: state.todos.filter(todo => todo.id !== action.payload),
      }
    case 'CHANGE_FILTER':
      return {
        ...state,
        filter: action.payload
      }
    case 'MODIFY_TODO':
      return {
        ...state, 
        todos: state.todos.map(todo => todo.id === action.payload.id ? action.payload : todo)
      }

    default:
      return state
  }
}
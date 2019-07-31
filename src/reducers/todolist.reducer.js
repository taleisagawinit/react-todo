
const initialState = {
  todo:[]
}


export default function(state = initialState, action) {
  switch(action.type) {
    case 'ADD_ITEM':
      return {...state, todo:[...state.todo, action.payload]}
    case 'REMOVE':
      return {...state, todo: state.todo.filter(item => action.payload !== item)}
    default:
      return state
  }
}
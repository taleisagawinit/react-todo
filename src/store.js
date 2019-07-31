import { createStore } from 'redux'

import todolistReducer from './reducers/todolist.reducer'

const store = createStore(todolistReducer)

 export default store 
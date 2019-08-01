import { createStore } from 'redux'

import todolistReducer from './reducers/todolist.reducer'

const store = createStore(todolistReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

 export default store 
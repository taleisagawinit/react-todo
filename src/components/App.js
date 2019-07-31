import React from 'react'
import 'normalize.css/normalize.css'
import '../styles/App.css'
import { Provider } from 'react-redux'
import store from '../store'
import List from './List'
import Add from './Add'
 
export default props => {
  

  return (
    <Provider store={store}>
      <div className="container">
        <div className="content">
          <h1>to-do list</h1>
          <Add />
          <List />
        </div>
      </div>
      
    </Provider>
    
   
  )
}
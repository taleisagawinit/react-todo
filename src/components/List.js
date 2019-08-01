import React, { useState } from 'react'
import MaterialIcon from 'material-icons-react'
import Item from './Item'
import Footer from './Footer'
import { addTodo } from '../actions/modify.action'
import { useSelector } from 'react-redux'


export default props => {
  const [todo, setTodo] = useState('')
  const [checkAll, setCheckAll] = useState(false)
  const allTodosCount = useSelector(appState => appState.todos.length)
  const todos = useSelector(appState => {
    const filter = appState.filter
    
    switch (filter) {
      case 'active':
        return appState.todos.filter(todo => !todo.checked)
      case 'completed':
        return appState.todos.filter(todo => todo.checked)
      default:
        return appState.todos
    }
  })

  function handleSubmit(e) {
    e.preventDefault()
    addTodo(todo)
    setTodo('')
  }


  return (
    <form onSubmit={handleSubmit}>
      <div className="input">
        <MaterialIcon onClick={e => setCheckAll(!checkAll)}  icon="keyboard_arrow_down" />
        <input type="text" placeholder="He aha kou makemake?" value={todo} onChange={e => setTodo(e.target.value)} />
      </div>
      <ul className="items" >
        {todos.map(todo => (
          <Item key={todo.id} id={todo.id} value={todo.value} checked={checkAll ? true : todo.checked} />
        ))}
      </ul>
      {allTodosCount > 0 ? (
        <Footer />
      ) : ''}
      <button style={{display:'none'}} type="submit">Submit</button>
    </form>
  )
}
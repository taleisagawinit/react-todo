import React from 'react'
import { useSelector } from 'react-redux'
import { setFilter } from '../actions/modify.action'


export default props => {
  const count = useSelector(appState => appState.todos.filter(todo => !todo.checked).length)
  const filterType = useSelector(appState => appState.filter)
  

  return (
    <footer>
      <p>{count === 1 ? "1 item left" : count + " items left"}</p>
      <div>
        <button className={filterType === 'all' ? 'active' : ''} onClick={e => setFilter('all')} type="button">All</button>
        <button className={filterType === 'active' ? 'active' : ''} onClick={e => setFilter('active')} type="button">Active</button>
        <button className={filterType === 'completed' ? 'active' : ''} onClick={e => setFilter('completed')} type="button">Completed</button>
      </div>
      {/* <button onClick={clearCompleted} type="button">Clear completed</button> */}
    </footer>
  )
}
import React from 'react'
import { useSelector } from 'react-redux'
import Item from './Item'
import { filter } from '../actions/modify'

export default props => {
  const items = useSelector(appState => appState.todo)
  let i =0
  return ( 
    <div>
      <div className="list">
        {items.map(item => (
          <Item key={i++} {...item}/>
        ))}
      </div>
      <footer>
        {items.length > 0 ? filter(items) : ``}
      </footer>
    </div>
    
  )
}
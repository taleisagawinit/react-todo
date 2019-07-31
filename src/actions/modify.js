import store from '../store'
import React from 'react'

export function addTodo(item) {
  store.dispatch({
    type: 'ADD_ITEM',
    payload: item
  })
}

export function filter(items) {
  return (
    <div>
      <p>{items.length === 1 ? "1 item left" : items.length + " items left"}</p>
      <p>all</p>
      <p>active</p>
      <p>completed</p>
      <p>clear</p>
    </div>
  )
}

export function remove(item) {
  store.dispatch({
    type: 'REMOVE',
    payload: item
  })
}


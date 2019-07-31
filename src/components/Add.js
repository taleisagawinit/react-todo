import React from 'react'
import { addTodo } from '../actions/modify'

export default props => {
  let input = ''
  function handleChange(e) {
      input = e.target.value
  }

  function handleSubmit(e) {
    e.preventDefault()
    addTodo(input)
    document.getElementById("form").reset();
  }

  

  return (
    <form id="form" className="input" onSubmit={handleSubmit}>
      <input type="text" placeholder="what do ya have to do?"  onChange={handleChange} />
    </form>
  )
}
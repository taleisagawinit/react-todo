import React, { useState, useEffect } from 'react'
import MaterialIcon from 'material-icons-react'
import { removeTodo, modifyList } from '../actions/modify.action'

export default props => {
  const value = props.value
  const [checked, setChecked] = useState(props.checked)

  useEffect(() => {
    modifyList({
      id: props.id,
      value: props.value,
      checked: checked
    })
  }, [checked, props.id, props.value])

  function remove(e) {
    removeTodo(props.id)
  }

  return (
    <li>
      <input id={'check' + props.id} type="checkbox" checked={checked} onChange={e => setChecked(!checked)} />
      <label htmlFor={'check' + props.id} className="replace">
        <MaterialIcon icon="done" />
      </label>
      <input value={value} disabled />
      <button type="button" onClick={remove}>X</button>
    </li>
  )
}
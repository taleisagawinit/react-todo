import React from 'react' 
import MaterialIcon from 'material-icons-react' 
import { remove } from '../actions/modify' 

export default props => {
  let i=0;
  function deleteItem() {
    remove(props)
  }
  console.log(props)
  return (
    <div key={i++} className="li">
      <div className="check">
        <MaterialIcon icon="check_box_outline_blank" size="medium" color="rgba(255, 255, 255, 1)"></MaterialIcon>
        <span>{Object.values(props).join('')}</span>
      </div>
      <MaterialIcon icon="delete_outline" size="medium" color="rgba(255, 255, 255, 1)"></MaterialIcon>
      {/* <button onClick={deleteItem}></button> */}
    </div>
  )
  
}
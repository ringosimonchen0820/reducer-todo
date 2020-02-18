import React, { useState } from 'react'

function ListForm(props){

     const [item, setItem] = useState('')


     const handleChanges = event => {
          setItem(event.target.value)
     }
     const submitItem = event => {
          event.preventDefault();
          props.addItem(item)
     }


     return(
          <div>Hello I am the form
               <form onSubmit={submitItem}>
                    <input 
                         type="text"
                         name="item"
                         value={item}
                         onChange={handleChanges}
                         placeholder="Add item"
                    />
                    <button onClick={() => dispatch({ type:'SET_TITLE'})}>Add Item</button>
               </form>
          </div>
     )
}
export default ListForm
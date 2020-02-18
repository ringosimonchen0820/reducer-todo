import React, {useState, useReducer } from 'react';
import TodoList from './components/TodoList'
import './App.css';

// import reducers
import {initialState, reducer } from './reducer/reducerTodo'




function App() {

  const [state, dispatch] = useReducer(reducer, initialState);
  const [item, setItem] = useState('')

  // ** LIST FORM
  const handleChanges = event => {
    setItem(event.target.value)
  }
  const submitItem = event => {
    event.preventDefault();
  }

  // ** TOGGLE COMPLETED
  const toggleItem = (id) => {
    dispatch( { type:"TOGGLE_ITEM", payload: id})
  }



  return (
    <div className="App">
      <TodoList state={state.todos} toggleItem={toggleItem}/>
      {/* <ListForm addItem={addItem} /> */}


      <form onSubmit={submitItem}>
        <input
          type="text"
          name="item"
          value={item}
          onChange={handleChanges}
          placeholder="Add item"
        />
        <button onClick={() => dispatch({ type: 'ADD_TODO', payload: item })}>Add Item</button>
      </form>

      <button onClick={() => dispatch({type:"CLEAR_COMPLETED"})}>Clear Completed</button>
    </div>
  );
}

export default App;

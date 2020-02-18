import React from 'react';
import TodoItem from './TodoItem'


function TodoList(props){

    let todoList = props.state
    let toggleItem = props.toggleItem

    return(
        <div>
            {todoList.map(item => {
                return(
                        <TodoItem key={item.id} {...item} toggleItem={toggleItem}/>
                )
            })
            }
        </div>
    )
}

export default TodoList;
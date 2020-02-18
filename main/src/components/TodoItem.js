import React from 'react'


function TodoItem(props){

    console.log(props.id)
    console.log(props.completed)

    return(
        <div key={props.id} onClick={() => props.toggleItem(props.id)}>
            <p>{props.item}</p>
        </div>
    )
}

export default TodoItem
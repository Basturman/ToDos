import React from "react";


function TodoSort(props){
    return(
    <div className="todosort">
        <button onClick={props.AllTodos}>All ToDos</button>
        <button onClick={props.Done}>Done</button>
        <button onClick={props.NotDone}>Not Done</button>
    </div>
    )
}


export default TodoSort
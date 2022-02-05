import React from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

function TodoList(props){
    return(
        <ul className="todolist">
            <h3>Priority I</h3>
            {props.todos1.map((todo, index) => {
                return <TodoItem todos={props.todos1} todo={todo} key={todo.id} index={index} onChange={props.onToggle} 
                allTodos={props.AllTodos} todosDone={props.todosDone} todosNotDone={props.todosNotDone} 
                dragStartHendler={props.dragStartHendler} 
                dragOverHendler={props.dragOverHendler} dropHendler={props.dropHendler}/>
            })}
            <h3>Priority II</h3>
            {props.todos2.map((todo, index) => {
                return <TodoItem todos={props.todos2} todo={todo} key={todo.id} index={index} onChange={props.onToggle} 
                allTodos={props.AllTodos} todosDone={props.todosDone} todosNotDone={props.todosNotDone}
                dragStartHendler={props.dragStartHendler} 
                dragOverHendler={props.dragOverHendler} dropHendler={props.dropHendler}/>
            })}
            <h3>Priority III</h3>
            {props.todos3.map((todo, index) => {
                return <TodoItem todos={props.todos3} todo={todo} key={todo.id} index={index} onChange={props.onToggle} 
                allTodos={props.AllTodos} todosDone={props.todosDone} todosNotDone={props.todosNotDone}
                dragStartHendler={props.dragStartHendler} 
                dragOverHendler={props.dragOverHendler} dropHendler={props.dropHendler}/>
            })}
        </ul>
    )
}
TodoList.propTypes={
    todos1: PropTypes.arrayOf(PropTypes.object).isRequired,
}
export default TodoList
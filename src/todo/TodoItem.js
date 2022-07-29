import React, {useContext} from "react";
import PropTypes from "prop-types";
import Context from '../context';

let styles={
    sttodos : {
        width: "95%",
        height: "100px",
        marginBottom: "10px",
        paddingLeft: "15px",
        backgroundColor: "rgb(196, 255, 190)",
        display: "flex",
        justifyContent: "space-between",
        alignItems : "center",
        border:"solid 1px rgb(90, 190, 79)",
        borderRadius : "10px",
        cursor : "grab"
    },
    spanText : {
        textAlign: "center",
        display : "flex",
        alignItems: "center",
    },
    checkBox : {
        marginRight: "20px",
        width: "20px",
        height: "20px",
    },
    delTodo : {
        width: "30px",
        height: "30px",
        backgroundColor: "red",
        borderRadius: "30%",
        color: "white",
        border: "none",
        marginRight: "15px",
    },
}


function TodoItem({todos, todo, index, onChange, allTodos, todosDone,
     todosNotDone ,dragStartHendler,dragOverHendler,dropHendler}){
    const {removeTodo} = useContext(Context)
    const classes = []

    if (todo.completed) {
        classes.push("done")
    }
    if (allTodos) {
        return(
            <li style={styles.sttodos} draggable={true} 
                onDragStart={(e) => dragStartHendler(e,todo,todos)}
                onDragOver={(e) =>dragOverHendler(e)}
                onDrop={() => {dropHendler(todos)}}>
                <span style={styles.spanText} className={classes.join(' ')}>
                    <input type="checkbox" style={styles.checkBox} checked={todo.completed} onChange={() => onChange(todo.id)}/>
                    <strong>{index+1}</strong>
                    &nbsp;&nbsp;
                    {todo.title}
                </span>
                <button style={styles.delTodo} onClick={() => removeTodo(todo.id)}>&times;</button>
            </li>
        )
    }
    else if (todosDone) {
        if (todo.completed) {
            return(
                <li style={styles.sttodos} draggable={true}
                    onDragStart={(e) => dragStartHendler(e,todo,todos)}
                    onDragOver={(e) =>dragOverHendler(e)}
                    onDrop={() => {dropHendler(todos)}}>
                    <span style={styles.spanText} className={classes.join(' ')}>
                        <input type="checkbox" style={styles.checkBox} checked={todo.completed} onChange={() => onChange(todo.id)}/>
                        <strong>{index+1}</strong>
                        &nbsp;&nbsp;
                        {todo.title}
                    </span>
                    <button style={styles.delTodo} onClick={() => removeTodo(todo.id)}>&times;</button>
                </li>
            )
        }
        else{
            return null
        }
    }
    else if (todosNotDone) {
        if (!todo.completed) {
            return(
                <li style={styles.sttodos} draggable={true}
                    onDragStart={(e) => dragStartHendler(e,todo,todos)}
                    onDragOver={(e) =>dragOverHendler(e)}
                    onDrop={() => {dropHendler(todos)}}>
                    <span style={styles.spanText} className={classes.join(' ')}>
                        <input type="checkbox" style={styles.checkBox} checked={todo.completed} onChange={() => onChange(todo.id)}/>
                        <strong>{index+1}</strong>
                        &nbsp;&nbsp;
                        {todo.title}
                    </span>
                    <button style={styles.delTodo} onClick={() => removeTodo(todo.id)}>&times;</button>
                </li>
            )
        }
        else{
            return null
        }
    }
    else{
        return null
    }
    
}
TodoItem.prototype={
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired,
}
export default TodoItem
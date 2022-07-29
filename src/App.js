import React from 'react'
import TodoList from './todo/TodoList';
import Context from './context';
import AddTodo from './AddTodo';
import TodoSort from './TodoSort';

function App() {  
  const [todos1, setTodos1] = React.useState(
    localStorage.getItem("todos1") ? JSON.parse(localStorage.getItem("todos1")) : [] 
  )
  const [todos2, setTodos2] = React.useState(
    localStorage.getItem("todos2") ? JSON.parse(localStorage.getItem("todos2")) : []
  )
  const [todos3, setTodos3] = React.useState(
    localStorage.getItem("todos3") ? JSON.parse(localStorage.getItem("todos3")) : []
  )

  
  const [prioriti,setPrioriti] = React.useState(" ")
  const [allTodos,setAllTodos] = React.useState(true)
  const [done,setDone] = React.useState(false)
  const [notDone,setNotDone] = React.useState(false)
  const [todo, setTodo] = React.useState(null)
  const [dragCont,setDragCont] = React.useState(null)

  React.useEffect(() => {
    localStorage.setItem("todos1", JSON.stringify(todos1))
    localStorage.setItem("todos2", JSON.stringify(todos2))
    localStorage.setItem("todos3", JSON.stringify(todos3))
  }, [todos1,todos2,todos3])

 
  function toggleTodo(id){
    setTodos1(
      todos1.map(todo => {
        if (todo.id === id) {
          todo.completed =! todo.completed
        }
        return todo
      })
    )
    setTodos2(
      todos2.map(todo => {
        if (todo.id === id) {
          todo.completed =! todo.completed
        }
        return todo
      })
    )
    setTodos3(
      todos3.map(todo => {
        if (todo.id === id) {
          todo.completed =! todo.completed
        }
        return todo
      })
    )
  }

  function removeTodo(id){
    setTodos1(todos1.filter(todo => todo.id !== id))
    setTodos2(todos2.filter(todo => todo.id !== id))
    setTodos3(todos3.filter(todo => todo.id !== id))
  }

  function addTodo(title){
    if (prioriti==="1") {
      setTodos1(todos1.concat([{
        title,
        id: Date.now(),
        completed:false
      }]))
    }
    else if (prioriti==="2") {
      setTodos2(todos2.concat([{
        title,
        id: Date.now(),
        completed:false
      }]))
    }
    else if (prioriti==="3") {
      setTodos3(todos3.concat([{
        title,
        id: Date.now(),
        completed:false
      }]))
    }
    else{
      alert("Please choose the priority")
    }
  }
  function onPrioriti(pri){
    setPrioriti(pri)
  }
  function AllTodos(){
    setAllTodos(!allTodos)
    setDone(false)
    setNotDone(false)
  }
  function TodosDone(){
    setDone(!done)
    setNotDone(false)
    setAllTodos(false)
  }
  function TodosNotDone(){
    setNotDone(!notDone)
    setDone(false)
    setAllTodos(false)
  }
  function dragStartHendler(e,todo,todos){
    setTodo(todo)
    setDragCont(todos)
  }
  function dragOverHendler(e){
    e.preventDefault()
  }
  function dropHendler(container){
    if(container!==dragCont){
      if (container===todos1) {
        removeTodo(todo.id)
        setTodos1(todos1.concat([todo]))
      }
      else if (container===todos2) {
        removeTodo(todo.id)
        setTodos2(todos2.concat([todo]))
      }
      else if (container===todos3) {
        removeTodo(todo.id)
        setTodos3(todos3.concat([todo]))
      }
    }
  }


  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="App">
        <header>
          <h1 className='logo'>✓</h1><h1>ToDoS</h1>
        </header>
        <main>
          <div className='ContainerAddTodos'>
            <AddTodo onCreate={addTodo} onPrioriti={onPrioriti}/>
          </div>
          <div className='ContainerTodos'>
            {todos1.length||todos2.length||todos3.length ? <TodoList todos1={todos1} todos2={todos2} todos3={todos3}
             onToggle={toggleTodo} AllTodos={allTodos} todosDone={done} 
             todosNotDone={notDone} dragStartHendler={dragStartHendler}
              dragOverHendler={dragOverHendler} dropHendler={dropHendler}
              /> : <p className='clearTodos'><b>No Todos! </b></p>}
          </div>
          <div className='TodosSortBtn'>
            <TodoSort AllTodos={AllTodos} Done={TodosDone} NotDone={TodosNotDone}/>
          </div>
        </main>
      </div>
    </Context.Provider>
  );
}

export default App;

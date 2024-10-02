import { useState } from "react"
import { useRef } from "react"

function App (){
  const input = useRef()
  const [todo,setTodo]= useState([])

  const AddTodo = (event)=>{
    event.preventDefault()
    todo.push(input.current.value)
    setTodo(...todo)
    input.current.value = "" 
  }
  const  deleteTodo = (index)=>{
    todo.splice(index, 1)
    setTodo(...todo)
  }
  const editTodo = (index)=>{
    const promt = promt("please enter your ToDo")
    todo.splice(index,1, promt)
    setTodo(...todo)
  }
  return(
    <>
    <h1>ToDo App With React</h1>
    <form onSubmit={AddTodo}>
      <input type="text" placeholder="add todo" ref={input}/>
      <button type="submit">Add ToDo</button>
    </form>
    <ol>
      {todo.length > 0 ? todo.map((item,index)=>{
        return<li key={item}>{index}
        <div>
      <button onClick={()=> deleteTodo(index)} className="delbtn">Delete</button>
      <button onClick={()=> editTodo(index)} className="edbtn">Edit</button>
      </div>
        </li>
      }):<h1>"no item found ....."</h1>}
    </ol>
    </>
 ); 
}

export default App

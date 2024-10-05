// import { useState, useRef } from "react";

import { useState } from "react"
import Card from "./Card"

// function App() {
//   const input = useRef();
//   const [todo, setTodo] = useState([]);

//   const AddTodo = (event) => {
//     event.preventDefault();
//     if (input.current.value.trim()) {
//       setTodo([...todo, input.current.value]);
//     }
//     input.current.value = ""; // 
//   };

//   const deleteTodo = (index) => {
//     const newTodos = todo.filter((_, i) => i !== index);
//     setTodo(newTodos);
//   };

//   const editTodo = (index) => {
//     const updatedTodo = prompt("Please enter your updated ToDo:", todo[index]); 
//     if (updatedTodo !== null && updatedTodo.trim()) {
//       const newTodos = [...todo]; 
//       newTodos[index] = updatedTodo; 
//       setTodo(newTodos);
//     }
//   };

//   return (
//     <>
//       <h1>ToDo App With React</h1>
//       <form onSubmit={AddTodo}>
//         <input type="text" placeholder="Add ToDo" ref={input} />
//         <button type="submit">Add ToDo</button>
//       </form>
//       <ol>
//         {todo.length > 0 ? (
//           todo.map((item, index) => (
//             <li key={index}>
//               {item}
//               <div>
//                 <button onClick={() => deleteTodo(index)} className="delbtn">
//                   Delete
//                 </button>
//                 <button onClick={() => editTodo(index)} className="edbtn">
//                   Edit
//                 </button>
//               </div>
//             </li>
//           ))
//         ) : (
//           <h1>No items found...</h1>
//         )}
//       </ol>
//     </>
//   );
// }

// export default App;








// import { useState } from "react"
// import { useRef } from "react"


// function App (){
//   const input = useRef()
//   const [todo,setTodo]= useState([])

//   const AddTodo = (event)=>{
//     input.current.value = "" 
//     event.preventDefault()
//     todo.push(input.current.value)
//     setTodo(...todo)
//   }
//   const  deleteTodo = (index)=>{
//     todo.splice(index, 1)
//     setTodo(...todo)
//   }
//   const editTodo = (index)=>{
//     const promt = promt("please enter your ToDo")
//     todo.splice(index,1, promt)
//     setTodo(...todo)
//   }
//   return(
//     <>
//     <h1>ToDo App With React</h1>
//     <form onSubmit={AddTodo}>
//       <input type="text" placeholder="add todo" ref={input}/>
//       <button type="submit">Add ToDo</button>
//     </form>
//     <ol>
//       {todo.length > 0 ? todo.map((item,index)=>{
//         return <li key={item}>{todo}

//       <button onClick={()=> deleteTodo(index)} className="delbtn">Delete</button>
//       <button onClick={()=> editTodo(index)} className="edbtn">Edit</button>
      
//         </li>
//       }):<h1>no item found .....</h1>}
//     </ol>
//     </>
//  ); 
// }

// export default App



// function App (){
//   const input = useRef()
//   const [todo,setTodo] = useState([])

// const addtodo = (event)=>{
// event.preventDefault ()
// todo.push(input.current.value)
// setTodo(...todo)
// console.log(input.current.value)
// }

//   return(
//     <>
//     <form onSubmit={addtodo}>
//       <input type="text" placeholder="add to do" ref={input} />
//       <button type="submit">submit</button>
//     </form>
//     <ol>
//       {todo.length > 0 ? todo.map((item,index)=>{
//         return<li key={item}>{index}</li>
//       })
//       :<h1>No item found...</h1>}
//     </ol>
//     </>
//   )
// }

// export default App




// function App (){
//   return(
//     <>
//     <h1>Bilal Ahmed</h1>
//     <Card title="Bilal Ahmed" lorm="lorm" rs="45"></Card>
//     <Card />
//     </>
    
//   )
// }
// export default App



function App(){
  const [counter , setcounter] = useState(0)
  const  Addcounter=()=>{
    setcounter(counter + 1)
  } 

  return(
    <>
    <h1>counter</h1>
    {counter}
    <button onClick={Addcounter}>Add counter</button>
    {counter <= 5 ? "abi choty ho" :"bry ho gy ho"}
    </>
  )
}
export default App
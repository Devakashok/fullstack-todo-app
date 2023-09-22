import { useEffect, useState } from "react";
import Todo from "./components/todo"
import { addtodo, getalltodo, updatetodo, deletetodo } from "./utils/handleapi";

function App() {

  const [todo,settodo] = useState([])
  const [text,settext] = useState("")
  const [isupdating,setisupdating] = useState(false)
  const [todoid, settodoid] = useState("")

  useEffect(()=>{
    getalltodo(settodo)
  },[])

  const updatemode = (_id, text) => {
    setisupdating(true)
    settext(text)
    settodoid(_id)
  }

  return (
    <div className="App">
    <div className="container">
      
      <h1>TODO APP</h1>

      <div className="top">
        <input 
          type="text" 
          placeholder="Add todos..." 
          value={text} 
          onChange={(e)=>settext(e.target.value)}
        />

        <div 
          className="add" 
          onClick={isupdating? 
            () => updatetodo(todoid, text, settodo, settext, setisupdating) 
            : () => addtodo(text, settext, settodo)}>
          {isupdating? "UPDATE" : "ADD" }
        </div>

      </div>
       
      <div className="list">
        {todo.map((item) => <Todo 
        key={item._id} 
        text={item.text} 
        updatemode = {() => updatemode(item._id,item.text)} 
        deletetodo = {() => deletetodo(item._id,settodo)}/>)}
      </div>
    </div>
      
    </div>
  );
}

export default App;

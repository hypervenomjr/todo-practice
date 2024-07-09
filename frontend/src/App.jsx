import {useEffect, useState } from 'react'
import { CreateTodo } from '../components/CreateTodo'
import {Todo} from '../components/Todos'




function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/todos')
      .then(async function (res) {
        const json =await res.json()
        setTodos(json.todos)
    })  
  },[])


  return (
    <div>
    <CreateTodo> </CreateTodo>
    <Todo todos={todos}></Todo>
    </div>
      
  )
}

export default App






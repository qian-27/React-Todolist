import React , { useState } from 'react'

export default function Todolist() {
   const [todo, setTodo] = useState({ description: '', date: '' });
   const [todos, setTodos] = useState([])

   const handleAddTodo = () => {
      setTodos([todo, ...todos]);
      setTodo({ description: '', date: '' });
   }

   const handleDeleteTodo = (row) => {
      console.log('delete todo' + row)
      setTodos(todos.filter((todo, index) => index !== row))
   }

   return(
      <React.Fragment>
        <h1>My To-Do-List</h1>
        <input 
          placeholder='Description'
          value={todo.description}
          onChange={e => setTodo({...todo, description: e.target.value})} 
        />
        <input 
          type='date'
          placeholder='Date'
          value={todo.date}
          onChange={e => setTodo({...todo, date: e.target.value})} 
        />
        <button onClick={handleAddTodo}>Add Todo</button>

         <table>
               <tr>
                  <th>
                     Date
                  </th>
                  <th>
                     Description
                  </th>
               </tr>
            <tbody>
               {
                  todos.map((todo, index) => 
                  <tr key={index}>
                     <td>{todo.date}</td>
                     <td>{todo.description}</td>
                     <td><button onClick={() => handleDeleteTodo(index)}>Done</button></td>
                  </tr>)
               }
            </tbody>
         </table>
      </React.Fragment>
   )
}


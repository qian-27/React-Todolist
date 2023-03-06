import React from "react"

export default function TodoTable({todos, deleteTodo}) {
   return(
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
               <td><button onClick={() => deleteTodo(index)}>Done</button></td>
            </tr>)
            }
         </tbody>
      </table>
   )
}
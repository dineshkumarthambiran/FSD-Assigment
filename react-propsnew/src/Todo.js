import React, { useState } from 'react'
import DisplayTodo from './DisplayTodo'

function Todo() {
    let [todos,setTodos] = useState([

        {
            "id":1,
            "taskname":"reading books"
        }
    ])

  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                </tr>
            </thead>

               {

            todos.map(todo =>(
                <DisplayTodo key = {todo.id} />
                // <tr>
                //     <td>{todo.id}</td>
                //     <td>{todo.taskname}</td>
                    
                //     </tr>


            ))
        }
      </table>   
    </div>
  )
}

export default Todo
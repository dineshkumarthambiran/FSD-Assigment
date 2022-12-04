import React from 'react'

function DisplayTodo(prop) {
  return (
    <div>
        <tr>
            <td>{prop.todo.id}</td>
            <td>{prop.todo.taskname}</td>
        </tr>
    </div>
  )
}

export default DisplayTodo
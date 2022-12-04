import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Student() {
    const api = axios.create({
        baseURL:'http://localhost:3000/Student'
    })

    let [Stud,setstud] = useState([])

    let getRecords =()=>{
        api.get('/')
        .then(res=>setstud(res.data))
    }

  return (
    <div>
        
        <h1>Student Details</h1>
        <button onClick={getRecords}>refresh</button>
        <table  border='1' color='red' >
            <thead>
                <tr >
                    <th>Student id</th>
                    <th>Student Name</th>
                </tr>
            </thead>
            <tbody>
                {
                   
                   Stud.map ((Student)=>(
                    <tr key={Student.id}>
                    <td>{Student.id}</td>
                    <td>{Student.name}</td>
                    </tr>
                    ))
                }
            
            </tbody>

        </table>
       
    </div>
  )
}

export default Student
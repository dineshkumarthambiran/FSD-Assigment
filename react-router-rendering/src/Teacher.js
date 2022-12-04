import React,{ useState } from 'react'
import axios from 'axios'


function Teacher() {
    const api = axios.create({
        baseURL:'http://localhost:3000/Teacher'
    })

    let [teacher,setTeacher] = useState([])

    let getRecords =()=>{
        api.get('/')
        .then(res=>setTeacher(res.data))
    }

  return (
    <div>   <h1>Teacher Details</h1>
    <button onClick={getRecords}>refresh</button>
    <table color='red' border='red' >
        <thead>
            <tr >
                <th>Teacher id</th>
                <th>Teacher Name</th>
            </tr>
        </thead>
        <tbody>
            {
               
               teacher.map ((teacher)=>(
                <tr key={teacher.id}>
                <td>{teacher.id}</td>
                <td>{teacher.tname}</td>
                </tr>
                ))
            }
            {/* { getRecords()} */}
        </tbody>

    </table></div>
  )
}

export default Teacher
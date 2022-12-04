import React,{useState} from 'react'
import axios from 'axios'
function Department() {
 
  //Setting up the base url for making requests  
  const api = axios.create({
    baseURL:`http://localhost:8080/department`
  })
  
  //employee state to hold the employee records in a centralized place
  const [Department, setDepartment] = useState([])
  const [deptid, setdeptid] = useState(0) 
  const [deptname, setdeptname] = useState('')
  const [location, setLocation] = useState('')


  let getAllRecords = ()=>{
    api.get(`/`).then(res =>{
       console.log(res.status);
       console.log(res.statusText);
       setDepartment((Department)=> res.data)
    })
  }

 
  let updatedeptId = (event)=>{
    setdeptid(event.target.value)
    console.log(deptid)
  }

  let updatedeptName = (event)=>{
if(event.target.value === ''){}
else{
  setdeptname(event.target.value)
    console.log(deptname)
  }}

  let updateLocation= (event)=>{
    if(event.target.value === ''){}
    else{
    setLocation(event.target.value)
    console.log(location)
  }}

  let insertContent = ()=>{
    const recordToInsert = 
    {
        "deptid":deptid,
        "deptname":deptname,
        "location":location
    }
    
  api.post('/',recordToInsert)
  .then(res=>console.log(res))
  .catch(err=>console.log(err))
  getAllRecords()
  }

  let deleteData = () => {

    let recordToDelete=
    {
        "id":deptid,
    }

    api.delete(`/${recordToDelete.id}`)
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
     getAllRecords()
  }


  let UpdateData = () => {

    let RecordToUpdate=
    {   
        "deptid":deptid,
        "deptname":deptname,
        "location":location
    }

    api.patch(`/${deptid}`, RecordToUpdate)
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
    
     getAllRecords()
  }



  
  return (
    <div>
        

        <table border="1">
            <thead>
                <tr>
                    <th>Department Id</th>
                    <th>Department Name</th>
                    <th>Department Location</th>
                </tr>
            </thead>
            <tbody>
            {
                Department.map((Department)=>( 
                <tr key={Department.deptid}>
                    <td>{Department.deptid}</td>
                    <td>{Department.deptname}</td>
                    <td>{Department.location}</td>
                </tr> ))
            }
            </tbody>
        </table><br /><br />
        <input type="number" placeholder='Input your Department id here!' onChange={updatedeptId} /> <br />
        <input type="text" placeholder='Input your Department name here!' onChange={updatedeptName} /> <br />
        <input type="text" placeholder='Input your location here!' onChange={updateLocation} /> <br />
        <button onClick={getAllRecords}>Refresh Data</button>
        <button onClick={insertContent}>Post Data </button>
        <button onClick={deleteData}>Delete Data</button>
        <button onClick={UpdateData}>update Data</button>
    </div>
  )
}

export default Department

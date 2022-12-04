import React , {useState} from 'react'

function ArrayusingFbased() {
    let depts = [
        {
            "id":1,
          "location" :"Chennai"  
        },
        {
            "id":2,
          "location" :"Mumbai"  
        },
        {
            "id":3,
          "location" :"trichy"  
        }
    ]


    let [department,setdepart] = useState(depts)

   let Insertnewarray = () => {
            setdepart(dept =>[...depts,
                {
                    "id":4,
                    "location" :"madurai"  

                }])

    }

    return (
        // <ul>
        //     {
        //         department.map((department)=>
        //         (
        //             <li>{department.id}{department.location}</li>    
        //         )
        //     )
        //     } 
        // </ul>
        <div>
        <button onClick={Insertnewarray}>Insert record</button>
        <table border = "1">
                <thead>
                        <th>departid </th>
                        <th>dept name</th>
                </thead>
                {
                    department.map((department)=>(

                        <tr>
                                <td>{department.id}</td>
                                <td>{department.location}</td>
                                
                        </tr>
                    )
                    
                    )
                }
        </table>
        </div>
        )

}

export default ArrayusingFbased
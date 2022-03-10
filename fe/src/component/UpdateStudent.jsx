import React,{useState,useEffect} from 'react'
import axios from 'axios'

const UpdateStudent = (props) => {
    const [id, setid] = useState('')
    const [firstName, setfirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [updatedmsg, setupdatedmsg] = useState('')

    const add=()=>{
        // setRefreshKey(refreshKey+1)
          console.log(lastName,firstName);
          axios.post('http://localhost:9000/updateStudent',{
              id:id,
              firstName:firstName,
              lastName:lastName
          })
          .then(res=>{
              console.log(res.data.message);
              setupdatedmsg(res.data.message);
              props.setRefreshKey(props.refreshKey+1)
          })
        
  
        //   62245eaf4c2c23d322c9bddc
      }
  return (
    <div>
        <label htmlFor="">Enter Id to Update: </label>
        <input type="text" onChange={(e)=>{setid(e.target.value)}} />
      <label htmlFor="">First Name: </label>
      <input type="text" onChange={(e)=>{setfirstName(e.target.value)}}/>

      <label htmlFor="">Last Name: </label>
      <input type="text" onChange={(e)=>{setlastName(e.target.value)}} />


      <button onClick={add}>Add Student</button>
      <h5 style={{color:'green'}}>{updatedmsg}</h5>
    </div>
  )
}

export default UpdateStudent

import React,{useState} from "react";
import RoutesMenu from "./RoutesMenu";
import axios from 'axios'
import ShowStudent from "./ShowStudent";
import UpdateStudent from "./UpdateStudent";
const Student = () => {
    const [firstName, setfirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [refreshKey, setRefreshKey] = useState(0);
 const [insertions, setinsertions] = useState('')
    const add=()=>{
      setRefreshKey(refreshKey+1)
        console.log(lastName,firstName);
        axios.post('http://localhost:9000/registerStudent',{
            firstName:firstName,
            lastName:lastName
        })
        .then(res=>{
            console.log(res.data.message);
            setinsertions(res.data.message)
        })
      


    }
  return (
    <div>
      <RoutesMenu />
      <ShowStudent refreshKey={refreshKey}/>
      <h1 style={{color:'blue'}}>Add  Student</h1>
      <label htmlFor="">First Name: </label>
      <input type="text" onChange={(e)=>{setfirstName(e.target.value)}}/>

      <label htmlFor="">Last Name: </label>
      <input type="text" onChange={(e)=>{setlastName(e.target.value)}} />


      <button onClick={add}>Add Student</button>
      <h5 style={{color:'green'}}>{insertions}</h5>

      <h1 style={{color:'blue'}}>Update Student</h1>
<UpdateStudent setRefreshKey={setRefreshKey} refreshKey={refreshKey} />
      {/* <h1>showStudent</h1>s */}
    </div>
  );
};

export default Student;

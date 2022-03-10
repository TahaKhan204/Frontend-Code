import React,{useState} from 'react'
import axios from 'axios'

const UpdateBook = (props) => {
    const [bookName, setbookName] = useState('')
    const [author, setauthor] = useState('')
    const [borrowedby, setborrowedby] = useState('')
    const [dateofborrow, setdateofborrow] = useState('')
    const [dateofreturn, setdateofreturn] = useState('')
   const [insertions, setinsertions] = useState('')
    const [ID, setID] = useState('')
    const add=()=>{
        props.setRefreshKey(props.refreshKey+1)
        console.log(bookName);
        axios.post('http://localhost:9000/updateBook',{
          id:ID,bookName:bookName,author:author,borrowedby:borrowedby,dateofborrow:dateofborrow
          ,dateofreturn:dateofreturn
        })
        .then(res=>{
            console.log(res.data.message);
            setinsertions(res.data.message)
        })
      
  
  
    }
  return (
    <div>
        
      <h1 style={{color:'aqua'}}>Update Books</h1>
<label htmlFor="">Enter Id to update: </label>
<input type="text" onChange={(e)=>{setID(e.target.value)}} />

<label htmlFor="">Book Name: </label>
<input type="text" onChange={(e)=>{setbookName(e.target.value)}} />

<label htmlFor="">Author:  </label>
<input type="text" onChange={(e)=>{setauthor(e.target.value)}} />

<label htmlFor="">borrowedby: </label>
<input type="text" onChange={(e)=>{setborrowedby(e.target.value)}}/>

<label htmlFor="">dateofborrow: </label>
<input type="date" onChange={(e)=>{setdateofborrow(e.target.value)}}/>

<label htmlFor="">dateofreturn: </label>
<input type="date"onChange={(e)=>{setdateofreturn(e.target.value)}} />
<button onClick={add}>Add Book</button>

<h1 style={{color:'green'}}>{insertions}</h1>
    </div>
  )
}

export default UpdateBook
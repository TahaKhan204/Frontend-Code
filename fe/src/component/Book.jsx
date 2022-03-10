import React,{useState,useEffect} from 'react'
import RoutesMenu from './RoutesMenu'
import axios from 'axios'
import ShowBook from './ShowBook'
import UpdateBook from './UpdateBook'
const Book = () => {
  const [bookName, setbookName] = useState('')
  const [author, setauthor] = useState('')
  const [borrowedby, setborrowedby] = useState('')
  const [dateofborrow, setdateofborrow] = useState('')
  const [dateofreturn, setdateofreturn] = useState('')
 const [refreshKey, setRefreshKey] = useState(0)
 const [insertions, setinsertions] = useState('')
  
  const add=()=>{
    setRefreshKey(refreshKey+1)
      console.log(bookName);
      axios.post('http://localhost:9000/registerBook',{
        bookName:bookName,author:author,borrowedby:borrowedby,dateofborrow:dateofborrow
        ,dateofreturn:dateofreturn
      })
      .then(res=>{
          console.log(res.data.message);
          setinsertions(res.data.message)
      })
    


  }
  return (
    <div>
      <RoutesMenu/>

<ShowBook refreshKey={refreshKey} />
      <h1 style={{color:'aqua'}}>Add Books</h1>

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
      <UpdateBook refreshKey={refreshKey} setRefreshKey={setRefreshKey} />
    </div>
  )
}

export default Book
import React,{useState,useEffect} from 'react'

const ShowBook = (props) => {
  const [msg, setmsg] = useState([]);

    const getData = () => {
        // console.log(props.refreshKey);
        // props.setRefreshKey(props.refreshKey+1)
        fetch("http://localhost:9000/showBook")
          .then((res) => res.json())
          .then((res) => {
            console.log(res.message[0]);
            setmsg(res.message);
            // setfirstName(res.message[0].firstName)
          });
      };
      
  useEffect(() => {
    getData();
  }, [props.refreshKey]);
  return (
    <div><h1 style={{color:'aqua'}}>Book List</h1>



<table>
      <tbody>
        <tr>
        <th>ID: </th>

          <th>Book Name</th>
          <th>author</th>
          <th>borrowedby</th>
          <th>dateofborrow</th>
          <th>dateofreturn</th>

        </tr>
        </tbody>
        {msg.map((names) => (
          <tbody key={names._id}>
            <tr >
          <td>{names._id} </td>
          <td>{names.bookName}</td>
          <td>{names.author}</td>
          <td>{names.borrowedby}</td>
          <td>{names.dateofborrow}</td>
          <td>{names.dateofreturn}</td>
        </tr></tbody>
          
        ))}
      </table>
    
    </div>
  )
}

export default ShowBook
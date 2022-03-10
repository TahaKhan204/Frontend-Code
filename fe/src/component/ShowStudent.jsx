import React, { useState, useEffect } from "react";
import axios from "axios";

const ShowStudent = (props) => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");

  const [msg, setmsg] = useState([]);

  const getData = () => {
    console.log(props.refreshKey);
    fetch("http://localhost:9000/showStudent")
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
    <div>
     <h1 style={{color:'blue'}}> Student List</h1>
      <h1>{firstName}</h1>
      <table>
      <tbody>
        <tr>
        <th>ID: </th>

          <th>first Name</th>
          <th>last Name</th>
        </tr>
        </tbody>
        {msg.map((names) => (
          <tbody key={names._id}>
            <tr >
          <td>{names._id} </td>
          <td>{names.firstName}</td>
          <td>{names.lastName}</td>
        </tr></tbody>
          
        ))}
      </table>
    </div>
  );
};

export default ShowStudent;

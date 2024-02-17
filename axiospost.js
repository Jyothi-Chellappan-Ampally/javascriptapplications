import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

function App1() {

  const[data, setData] = useState([])

  useEffect(()=>{
        axios.post('https://reqres.in/api/users',{
        'name':'abc',
        'job':'developer'
    })
    .then(response=>console.log(response))
    .catch(err=>console.log(err))
},[])
  return (
    <div className="App">
     <h2>Axios Example</h2>
     {/* {
      data.map((d,i)=>{
        return <p key={i}>{d.email}</p>
      })
    } */}
     </div>
  )
 
}

export default App1;

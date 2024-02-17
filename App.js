import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

function App() {

  const[data, setData] = useState([])

  useEffect(()=>{
    axios.get('https://reqres.in/api/users?page=2')
    .then(response=>setData(response.data.data))
    .catch(err=>console.log(err))
},[])
  return (
    <div className="App">
     <h2>Axios Example</h2>
     {
      data.map((d,i)=>{
        return <p key={i}>{d.email}</p>
      })
    }
     </div>
  )
 
}

export default App;

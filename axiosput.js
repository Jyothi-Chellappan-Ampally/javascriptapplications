import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios  from 'axios'

function Axiosput() {
const [data,setData]=useState([])

useEffect(()=>{
    
    axios.put(  "http://reqres.in/users/385",{
                "name":"jyothi",
                "job":"developer"
    })
    .then(response=>setData(data.data))
    .catch(error=>console.log(error))
},[])
    return (
        <div><h2>Put Request</h2></div>
    )
}

export default Axiosput

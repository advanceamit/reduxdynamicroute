import React from 'react'

import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';

const Userdetails = () => {
    const param=useParams()
    //console.log(param.id);
    const [singledata,setSingledata]=useState({})
    


    
   
    useEffect(() => {
        (async () => {
          
         const data=await axios.get(`https://jsonplaceholder.typicode.com/users/${parseInt(param.id)}`)
         
         console.log("api");
      setSingledata(data.data);

        })();
      
      
      }, [param.id]);
      

    console.log(singledata);
   


    
  

  return (
    <>
    <div>
    
        <li>Name:{singledata.name}</li>
        <li>Username:{singledata.username}</li>
        <li> Email:{singledata.email}</li>
        <li> Phone: {singledata.phone}</li>
    </div>
    </>
  )
}

export default Userdetails

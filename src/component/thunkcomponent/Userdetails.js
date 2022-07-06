import React from 'react'
import {useSelector} from 'react-redux'
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';

const Userdetails = () => {
    const param=useParams()
    console.log(param.id);
    const [singledata,setSingledata]=useState({})
    


    
    const data=useSelector((state=>state.user.users))
    const singleUser=()=>{
        console.log(data[0]);
        for(let i=0;i<data.length;i++){
            if(data[i].id===1){
                setSingledata(data[i])
            }
        }
    }
    useEffect(() => {
        singleUser()
       
    });
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
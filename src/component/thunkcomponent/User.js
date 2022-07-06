import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { apidata } from '../../action/userAction'
import { useEffect } from 'react'
import './User.css'
import { NavLink } from 'react-router-dom'

const User = () => {
  const data=useSelector((state=>state.user.users))
  console.log(data);
 
  
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(apidata())

  },[dispatch])

  // const click=(id)=>{
  //   console.log(id);

  // }
  
  return (
    <>
  
   {data.map((elem)=>{
      
      return(
        <>
        <NavLink to= {`/user/details/${elem.id}`} >
        <div>
      <div id='card'>
      
          {elem.name}
          </div>
         
          </div>
          </NavLink>
          </>
      )
     
    })}
    
</>
  )
}

export default User
import React from 'react'
import { NavLink,Routes,Route } from 'react-router-dom'
import Home from './thunkcomponent/Home'
import User from './thunkcomponent/User'
import Userdetails from './thunkcomponent/Userdetails'

const Nav = () => {
  return (
    
    <>

        <div>
            <NavLink to='/'><button>Home</button></NavLink>
            <NavLink to='/user'><button>Userdata</button></NavLink>
            
        </div>
        <Routes>
            <Route exact path='/' element={<Home/>}></Route>
            <Route exact path='/user' element={<User/>}></Route>
            <Route path='/user/details/:id' element={<Userdetails/>}></Route>
        </Routes>
    </>
  )
}

export default Nav
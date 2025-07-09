import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home/Home'
import Contact from './pages/contactPage/Contact'
import AboutPage from './pages/AbutPages/AboutPage'
import Menu from './pages/Menu/Menu'
import Cart from './pages/Cart/Cart'
import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
const App = () => {
  return (
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/about' element={<AboutPage/>}/>
    <Route path='/menu' element={<Menu/>}/>
    <Route path='/cart' element={<Cart/>
    }/>
   

    <Route path='/login' element={<Home/>}/>
    <Route path='/signup' element={<SignUp/>}/>
    
   </Routes>
   
  )
}

export default App

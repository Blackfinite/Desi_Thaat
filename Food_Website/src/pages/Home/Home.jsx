import React from 'react'
import NavBar from '../../components/Navbar/NavBar'
import Banner from '../../components/Banner/Banner'
import Special from '../../components/Special/Special'
import Menu from '../Menu/Menu'
import AboutHome from '../../components/AboutHome/AboutHome'
import HomeMenu from '../../components/HomeMenu/HomeMenu'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <>
    <NavBar/>
   <Banner/>
   <Special/>
   <AboutHome/>
   <HomeMenu/>
   <Footer/>
   </> 
  )
}

export default Home

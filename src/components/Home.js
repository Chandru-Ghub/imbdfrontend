import React from 'react'
import Navbar from './Navbar'
import MovieList from './MovieList'
import Footer from './Footer'

const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <MovieList/>
        <Footer/>
    </div>
  )
}

export default Home
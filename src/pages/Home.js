import React from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Bamms from '../components/Bamms'
import Footer from '../components/Footer'

const Home = () => {
  return <div>
    <Nav/>
    <main className="container">
      <Hero/>
      <Bamms/>
    </main>

    <Footer/>
  </div>
}

export default Home
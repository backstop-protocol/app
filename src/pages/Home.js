import React from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Bamms from '../components/Bamms'
import Footer from '../components/Footer'

const Home = () => {
  return <div>
    <main className="container">
      <Hero/>
      <Bamms/>
    </main>
  </div>
}

export default Home
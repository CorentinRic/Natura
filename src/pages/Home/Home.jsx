import React from 'react'
import './Home.css'
import Banner from '../../components/Banner/Banner'
import Calendar from '../../section/Calendar/Calendar'
import About from '../../section/About/About'
import Work from '../../section/Work/Work'

function Home() {
  return (
    <main className="home" id='home'>
      <Banner />
      <Calendar />
      <About />
      <Work />
    </main>
  )
}

export default Home

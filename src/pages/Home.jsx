import React from 'react'
import ImageHolder from '../components/ImageHolder'
import bedroom from '../assets/bedroom.png'
import '../styles/home.css'

const Home = () => {
  return (
    <main>
      <ImageHolder imgUrl={bedroom} alt="bedroom" />
    </main>
  )
}

export default Home
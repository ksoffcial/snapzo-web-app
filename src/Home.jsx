import React from 'react'
import Navbar from './Component/Navbar'
import Hero from './Component/Hero'
import BoxSlider from './Component/BoxSlider'
import Specalities from './Component/Specalities'
import FirstPro from './Component/FirstPro'
import Camcard1 from './Component/Camcard1'
import Camcard2 from './Component/Camcard2'
import Slider from './Component/Slider'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <BoxSlider/>
        <Specalities/>
        <FirstPro/>
        <Camcard1/>
        <FirstPro/>
        <Camcard2/>
    </div>
  )
}

export default Home
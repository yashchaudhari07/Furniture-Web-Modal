import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { Body } from '../Components/Body/Body'
import { Places } from '../Components/Places/Places'
import Product from '../Components/Products/HomeProduct'
import Slider from '../Components/SliderPage/Slider'
import Footer from '../Components/Footer/Footer'

export const Home = () => {
    return (
        <div className='overflow-hidden'>
            <Navbar />
            <Body/>
            <Places/>
            <Product/>
            <Slider/>
            <Footer/>
        </div>
    )
}

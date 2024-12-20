import React from 'react'
import { PageHeader } from '../Components/Pageheader/PageHeader'
import Navbar from '../Components/Navbar/Navbar'
import Register from '../Components/Register/Register'
import Footer from '../Components/Footer/Footer'


export const Checkoutpage = () => {
  return (
    <div>
        <Navbar/>
        <PageHeader Pagename="Checkout Page"/>
        < Register/>
        <Footer/>
    </div>
  )
}

import React from 'react'
import { PageHeader } from '../Components/Pageheader/PageHeader'
import Navbar from '../Components/Navbar/Navbar'
import ContactPage from '../Components/Contactpage/Contactpage'
import Footer from '../Components/Footer/Footer'


export const Contactpage= () => {
  return (
    <div>
        <Navbar/>
        <PageHeader Pagename="Contact Page"/>
        < ContactPage/>
        <Footer/>
    </div>
  )
}
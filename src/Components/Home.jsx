import React from 'react'
import Navbar from '../Pages/Navbar'
import Hero from '../Pages/Hero'
import AboutUs from '../Pages/Aboutus'
import Services from '../Pages/Services'
import Parts from '../Pages/Parts'
import Testimonials from '../Pages/Testimonial'
import ContactUs from '../Pages/Contactus'
import Footer from '../Pages/Footer'
import FAQ from '../Pages/FAQ'

const Home = () => {
  return (
        <>
      <div>

      <Navbar />

      <Hero/>
      <div id="about">
        <AboutUs />
      </div>

      <div id="services">
        <Services />
      </div>

      <div id="parts">
        <Parts />
      </div>

      <div id="contact">
        <ContactUs />
      </div>
      
      <div id="testimonial">
        <Testimonials />
      </div>


      <div id="faq">
        <FAQ/>
      </div>

{/* netsh wlan show profiles */}
{/* netsh wlan show profiles name=MTN_4G_8D28FA key=clear */}

      <div id='footer'>
        <Footer />
        </div>
    </div>
    </>
  )
}

export default Home

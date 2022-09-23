import React from 'react';
import Images from '../../Images/landing.jpg';
import About from './About';
import Pattern from './Pattern';

export default function Landing() {
  return (
    <>
    <section  style={{background:"#f9f8f3"}}>
        <title>Tech Hacks Pvt. Ltd.</title>
        <div className='wrapper'>
           <img src={Images} alt='landing'/>
        </div>
    </section>

    <About/>
    <Pattern/>
    </>
  )
}

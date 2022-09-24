import React from 'react';
// import Images from '../../Images/landing.jpg';
import About from './About';
import Pattern from './Pattern';
import '../../CSS/styles.css';

export default function Landing() {
  return (
    <>
    <section  style={{background:"#f9f8f3"}}>
        <title>Tech Hacks Pvt. Ltd.</title>
        <div className="position-relative wrapper" style={{position: "absolute",height: "100vh"}}>

        </div>
    </section>

    <About/>
    <Pattern/>
    </>
  )
}

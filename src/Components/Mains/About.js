import React from 'react';
import Images from '../../Images/abouts.png';

export default function About() {
  return (    
    <>
    <section  style={{background:"#F1D8DD"}}>
        <title>About</title>
        <div className='container'>
            <div className='row' style={{padding:"20px"}}>
                <div className='col-sm-6 mt-5'>
                    <h1 className='mb-4' style={{fontWeight:"800"}}>
                        About Tech Hacks
                    </h1>
                    <p>It is a technical domain to explore the skills</p>
                </div>
                <div className='col-sm-6 mt-5 mb-5'>
                    <img src={Images} className='imgs' alt='about' style={{boxShadow: "0 18px 30px 0 #f50709",borderRadius: "10px"}}/>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

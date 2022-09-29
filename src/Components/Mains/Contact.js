import React from 'react';
import { Link } from 'react-router-dom';
import '../../CSS/styles.css';
import "fa-icons";

export default function Contact() {
  return (
    <>
    <section  style={{background:"#F1D8DD", padding:"30px"}}>
      <title>Contact Us</title>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-7 col-md-7 col-sm-12 mb-3'>
            <h2 style={{fontWeight:"800"}}>Send a Message</h2>
            <p style={{lineHeight:"25px"}}>Please read the privacy policy before submitting your contact information.
            <br/>By submitting this form you agree to receive the emails and newsletters.
            <br/>You have an option to unsubscribe at anytime.
            </p>

            <div className='card' style={{background:"#FFCDD2", padding: "30px"}}>
              {/* <div className='col-lg-12 col-md-6 mt-3'> */}
                <input type="text" placeholder='First Name' maxLength={40}/>
              {/* </div> */}
              
              <div className='col-lg-12 col-md-6 mt-3'>
                <input type="text" placeholder='Mobile No.' minLength={10} maxLength={10} style={{width:"49%"}}/>&nbsp;&nbsp;
                <input type="text" placeholder='Email Id' maxLength={30} style={{width:"49%"}}/>
              </div>

              <div className='col-lg-12 col-md-6 mt-3'>
                <textarea type="textarea" placeholder="Your Message Here" maxLength={40} style={{width:"100%",height:"80px"}}/>
              </div>
              <div className='mt-3'>
                <input type="checkbox"/>
                <span style={{marginLeft:"20px"}}>Your email address will not be published. 
                Required fields are marked*</span>  
              </div>
              <div className='mt-5'>
                <Link className='btn btn-primary' to='/'>Submit</Link>
              </div>
            </div>
          </div>

          <div className='col-lg-5 col-md-5 col-sm-12 mb-3'>
            <div className='card' style={{background:"#FFCDD2",padding:"30px"}}>
              <h2 style={{fontWeight:"700"}}>Get In Touch</h2>
              <h4 className='mt-3'>Visit:</h4>
              <p className='mt-5'>Mail Us: 
                <a href="mailto:hackstotech@gmail.com" className='hov'>
                  hackstotech@gmail.com
                </a>
              </p>
              <div>
              <a href="/">
                      <i className="fab fa-facebook-square" />
                    </a>
              </div>
              
            </div>
          </div>
          
        </div>
      </div>
    </section>
    </>
  )
}
  
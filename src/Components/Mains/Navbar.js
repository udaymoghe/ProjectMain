import React from 'react'
import { Link } from 'react-router-dom';
import Images from '../../Images/techhackslogo.png';
import '../../CSS/style.css';

export default function Navbar() {
  return (
  <section style={{background:"#FFCDD2"}}>
    <div className="container">
  <nav className="navbar navbar-expand-lg navbar-light bg-lights">
  <h1 className="navbar-brand">
      <Link to="/">
        <img src={Images} className="imgs-p" alt="logo"/>
      </Link>
    </h1>
    <button className="navbar-toggler togle" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse sectionbar bar" id="navbarSupportedContent">
      <ul className="navbar-nav mb-lg-0">
      {/* <li className="nav-item"> 
            <Link className="nav-links" to='/Home'>Home</Link>
        </li> */}

        <li className="nav-items">
            <Link className="nav-links" to='/'>Home</Link>
        </li> 

        <li className="nav-items">
            <Link className="nav-links" to='/About'>About</Link>
        </li> 
        
        <li className="nav-items">
            <Link className="nav-links" to='/Features'>Features</Link>
        </li> 

        <li className="nav-items">
            <Link className="nav-links" to='/Pattern'>Programs</Link>
        </li> 

        <li className="nav-items">
          <Link className="nav-links" to='/Todo'>To-Do List</Link>
        </li>
      
        <li className="nav-items">
            <Link className="nav-links" to='/Contact'>Contact Us</Link>
        </li> 

        {/* <li className="nav-items">
            <Link className="nav-links" to='/Help'>How to Use</Link> */}
            {/* <Link className="nav-links" to='/Privacy'>Privacy Policy</Link> */}
            {/* <a className="nav-links" href='https://www.amstechresearch.com/cms-help/stg1/#/'>How to Use</a> */}
        {/* </li>  */}

        {/* <li className="nav-items btn">
          <a className="nav-links" href='https://www.cmsiimi.com/app/#/signin-v2' style={{color:"white"}}>Login</a> */}
          {/* <a className="nav-links" href='http://192.168.1.38:4200/#/auth/signin-v2' style={{color:"white"}}>Login</a> */}
          {/* <a className="nav-links" href='https://cmsiimi.com/app/#/auth/signin-v2' style={{color:"white"}}>Login</a> */}
          {/* <Link className="nav-links" to='/app/#/auth/signin-v2' style={{color:"white"}}>Login</Link> */}
        {/* </li> */}
      </ul>
      
    </div>
  </nav>
  </div>
  </section>
  )
}

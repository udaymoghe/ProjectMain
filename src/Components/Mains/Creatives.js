import React from 'react';
import '../../CSS/styles.css';
import '../../CSS/cards.css';
import { Link } from 'react-router-dom';


export default function Creatives() {
  return (
    <section  style={{background:"#f9f8f3"}}>
      <title>Creatives </title>
      <div className='container'>
        <div className='row download'>
          
          <div className='row app-detail'>
            <div className='col text-center'>
              <div className="user-info">
              <h3 className='mt-3'>Random Number Game</h3>
              <p className='mt-3'>Random Number to Generate</p>
                <Link className="mt-3 btn btn-primary" to='/RandomNumber'>Try it</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>    
  )
}

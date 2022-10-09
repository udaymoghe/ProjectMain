import React from 'react';
import { useState } from 'react';

export default function Flip() {
    const [thisState, setState] = useState({ flip: true });
    const handleClick = () => {
      setState((prevState) => {
        return { flip: !prevState.flip };
      });
    };
  return(
    <>
    <title>Flip the button</title>
    <section>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12 col-md-12 col-sm-12 mt-5 mb-4'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <h3>Program for fliping the button values</h3>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <h3>Output of the fliping the button value</h3>
                            <button className='btn btn-primary' onClick={handleClick}>
                                {thisState.flip ? "True" : "False"}
                            </button>                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

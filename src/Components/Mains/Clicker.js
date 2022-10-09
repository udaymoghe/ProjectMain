import React from 'react'

export default function Clicker() {
    const [thisNum,setNum] = React.useState(100);

    const handleAddClick =() => {
        setNum((prevState) => prevState+1)
    }

    const handleSubClick =() => {
        setNum((prevState) => prevState-1)
    }

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
                                <h3>Adding / Subtracting the Values on Click</h3>
                                <button className='btn btn-primary' onClick={handleAddClick}>
                                    Addition                      
                                </button>
                                <button className='btn btn-primary' onClick={handleSubClick}>
                                    Subtraction                      
                                </button>
                                <h2>{thisNum}</h2>                    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
      )
    }
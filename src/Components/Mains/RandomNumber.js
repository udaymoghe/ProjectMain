import React from 'react';

export default function RandomNumber() {
    function random()
    { 
     Math.floor(Math.random() * 10);
    }
    let random1 = random();

    const [thisNum,num1]= React.useState(0);

    const handleChange1='';
  
  return (
    <>
    <title>Random Number to Generate</title>
    <section  style={{background:"#f9f8f3"}}>
        <div className='container'>
        <div className='row'>
            <div className='col-lg-2 col-md-2 col-sm-12'>
            </div>
            <div className='col-lg-8 col-md-8 mt-5 mb-5' style={{padding:"20px"}}>
                <h2 style={{textAlign:"center",color:"#e31d24",fontWeight:"800"}}>Random Number to Generate</h2>                
                <div className='row' style={{marginTop:"35px",width:"auto", height:"450px",background:"lightgreen"}}>
                    <div className='col-lg-12 col-md-12 col-sm-12 mt-5 mb-5'>
                    <div className='row mt-5' style={{paddingLeft:"80px"}}>
                            <div className='col-lg-2 col-md-2 col-sm-12'>
                                <button type='submit' onChange={handleChange1} className='btn-primary btnrnd'/>
                            </div>
                            <div className='col-lg-2 col-md-2 col-sm-12'>
                                <button type='submit' onChange={handleChange1} className='btn-primary btnrnd'/>
                            </div>
                            <div className='col-lg-2 col-md-2 col-sm-12'>
                                <button type='submit' onChange={handleChange1} className='btn-primary btnrnd'/>
                            </div>
                            <div className='col-lg-2 col-md-2 col-sm-12'>
                                <button type='submit' onChange={handleChange1} className='btn-primary btnrnd'/>
                            </div>
                            <div className='col-lg-2 col-md-2 col-sm-12'>
                                <button type='submit' onChange={handleChange1} className='btn-primary btnrnd'/>
                            </div>
                        </div>
                        <div className='row mt-5' style={{paddingLeft:"80px"}}>
                            <div className='col-lg-2 col-md-2 col-sm-12'>
                                <button type='submit' onChange={handleChange1} className='btn-primary btnrnd'/>
                            </div>
                            <div className='col-lg-2 col-md-2 col-sm-12'>
                                <button type='submit' onChange={handleChange1} className='btn-primary btnrnd'/>
                            </div>
                            <div className='col-lg-2 col-md-2 col-sm-12'>
                                <button type='submit' onChange={handleChange1} className='btn-primary btnrnd'/>
                            </div>
                            <div className='col-lg-2 col-md-2 col-sm-12'>
                                <button type='submit' onChange={handleChange1} className='btn-primary btnrnd'/>
                            </div>
                            <div className='col-lg-2 col-md-2 col-sm-12'>
                                <button type='submit' onChange={handleChange1} className='btn-primary btnrnd'/>
                            </div>
                        </div>
                        <div className='row mt-5'>
                            <button className='btn-primary btnrol' type='submit'>Generate Random Number</button>
                            {random1}
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-lg-2 col-md-2 col-sm-12'>
            </div>       
        </div>    
        </div>    
    </section>
    </>
  )
}



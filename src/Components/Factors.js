import React from 'react'

let fact = `const n = 12;
console.log('The Factors of $(n) is ');
for (let i=0; i<=n; i++)
{
    if(n % i == 0)
    {
        console.log(i);
    }
}`

export default function Factors() {
    const[thisNum1,setNum1] = React.useState(0);
    const[thisSubmit,setSubmit] = React.useState(0);
    const handleChange1 = (event) =>{
        setNum1(event.target.value);
        setSubmit(0);
    }
    const handleSubmit = () => {
        if(thisSubmit === 0)
        {
            setSubmit(1);
        }
    }
    const n = thisNum1;
    let facts = [];
    console.log(`The Factors of $(n) is `); 
    for (let i=0; i<=n; i++)
    {
        if(n % i === 0)
        {
            console.log(i);
            facts.push(<p>{i}</p>) 
        }
    }
    return (
        <>
        <title>Factors of the Number</title>
        <section>
        <div className='container'>
                <h1 style={{textAlign:"center", marginTop:"30px",fontWeight:"800"}}>Factors to Identify:</h1>
            <div className='row'>
                <div className='mt-5 col-md-6 mb-5'>
                    <h2>Identify the Factors:</h2>
                    <div className='input newLineRender'>
                        {fact}
                    </div>
                </div>
                <div className='mt-5 col-md-6'>             
                    <h2>Output of the Program</h2>
                    <div className="newLineRender output" style={{padding:"50px"}}>
                        <form id='dataForm'>
                        <label>Enter Your Number:</label><br/>
                        <input className='mt-1 mb-3' onChange = {handleChange1} type='text' placeholder='Enter Number 1'/><br/>
                        </form>
                        <button form="dataForm" className='btn btn-primary mt-3' type='submit' onClick={handleSubmit}>SUBMIT</button>
                        <br/>
                        <label className='mt-5 mb-1'>Your Output is:</label>
                        <br/> 
                        {thisSubmit? <p>{facts}</p>: <p> </p>}
                    </div>
                </div>
            </div>
            </div>
        </section>
        </>
  )
}

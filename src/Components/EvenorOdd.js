import React from 'react'

let evenodd = `const [thisNum1,setNum1] = React.useState(0);
const [thisSubmit,setSubmit] = React.useState(0);

const handleChange1 = (event) =>{
    setNum1 (event.target.value);
    setSubmit(0);
}
const handleSubmit = () => {
    if(thisSubmit===0)
    {
        setSubmit(1);
    }
}

const num = thisNum1;
let result = '';

if (thisSubmit === 1)
{
if(num %2 === 0)
{
    console.log("It is even number");
    result = 'It is even number';
}
else
{
    result = 'It is Odd number';
    console.log("It is odd number");
}
}`

export default function EvenorOdd() {
    const [thisNum1,setNum1] = React.useState(0);
    const [thisSubmit,setSubmit] = React.useState(0);

    const handleChange1 = (event) =>{
        setNum1 (event.target.value);
        setSubmit(0);
    }
    const handleSubmit = () => {
        if(thisSubmit===0)
        {
            setSubmit(1);
        }
    }

    const num = thisNum1;
    let result = '';

    if (thisSubmit === 1)
    {
    if(num %2 === 0)
    {
        console.log("It is even number");
        result = 'It is even number';
    }
    else
    {
        result = 'It is Odd number';
        console.log("It is odd number");
    }
}

    return (
    <>
    <title>Even or Odd</title>
    <section>
    <div className='container'>
            <h1 style={{textAlign:"center", marginTop:"30px",fontWeight:"800"}}>Even or Odd:</h1>
        <div className='row'>
            <div className='mt-5 col-md-6 mb-5'>
                <h2>Identify Even or Odd Number:</h2>
                <div className='input newLineRender'>
                    {evenodd}
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
                    {result}
                </div>
            </div>
        </div>
        </div>
    </section>
    </>
  )
}

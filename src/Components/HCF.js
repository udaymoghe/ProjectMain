import React from 'react'

let hcfs = `const [thisNum1, setNum1] = React.useState(0);
const [thisNum2, setNum2] = React.useState(0);
const [thisSubmit, setSubmit] = React.useState(0);

const handleChange1 = (event) => { setNum1(event.target.value); setSubmit(0); }
const handleChange2 = (event) => { setNum2(event.target.value); setSubmit(0); }

const handleSubmit = () => 
{
    if(thisSubmit === 0) 
    { 
        setSubmit(1); 
    }
}

// program to find the HCF or GCD of two integers
let hcfd;
const number1 = thisNum1;
const number2 = thisNum2;
let hcfds = '';
// looping from 1 to number1 and number2
for (let i = 1; i <= number1 && i <= number2; i++) 
{
    // check if is factor of both integers
    if( number1 % i === 0 && number2 % i === 0) {
        hcfd = i;
    }
}
// display the hcf
console.log('HCF of "$"{number1} and "$"{number2} is "$"{hcf}.');`


export default function HCF() {
    const [thisNum1, setNum1] = React.useState(0);
    const [thisNum2, setNum2] = React.useState(0);
    const [thisSubmit, setSubmit] = React.useState(0);

    const handleChange1 = (event) => { setNum1(event.target.value); setSubmit(0); }
    const handleChange2 = (event) => { setNum2(event.target.value); setSubmit(0); }

    const handleSubmit = () => 
    {
        if(thisSubmit === 0) 
        { 
            setSubmit(1); 
        }
    }

    // program to find the HCF or GCD of two integers
    let hcfd;
    const number1 = thisNum1;
    const number2 = thisNum2;
    let hcfds = '';
    // looping from 1 to number1 and number2
    for (let i = 1; i <= number1 && i <= number2; i++) 
    {
        // check if is factor of both integers
        if( number1 % i === 0 && number2 % i === 0) {
            hcfd = i;
        }
    }
    // display the hcf
    hcfds=hcfds + (`HCF of ${number1} and ${number2} is ${hcfd}.`);

    return (
        <>
        <title>HCF Or GCD</title>
          <section>
          <div className='container'>
              <h1 style={{textAlign:"center", marginTop:"30px",fontWeight:"800"}}>HCF Or GCD</h1>
            <div className='row'>
              <div className='mt-5 col-md-6 mb-5'>
                  <h2>HCF Or GCD</h2>
                  <div className='input newLineRender'>
                      {hcfs}
                  </div>
              </div>
            <div className='mt-5 col-md-6'>             
                  <h2>Output of the Program</h2>
                  <div className="newLineRender output" style={{padding:"50px"}}>
                  <form id='dataForm'>
                        <label>Enter a first positive integer::</label><br/>
                        <input className='mt-1 mb-3' onChange = {handleChange1} type='text' placeholder='Enter Number 1'/><br/>
                        <label>Enter a second positive integer:</label><br/>
                        <input className='mt-1 mb-3' onChange = {handleChange2} type='text' placeholder='Enter Number 2'/><br/>
                        </form>
                        <button form="dataForm" className='btn btn-primary mt-3' type='submit' onClick={handleSubmit}>SUBMIT</button>
                        <br/>
                        <label className='mt-5 mb-1'>Your Output is:</label>
                        <br/> 
                        <RenderResult doRender = {thisSubmit} myResult = {hcfds}/>
                    </div>
              </div>
          </div>
          </div>
      </section>
      </>
  )
}


const RenderResult = (props) => {
    if(props.doRender === 1)
    {
        return(
            <span>{props.myResult}</span>
        );
    }
    else {
        return (<span> No Result Calculated...</span>);
    }
}
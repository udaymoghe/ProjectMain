import React from 'react';
import '../CSS/cards.css';

function calc(number1, number2, operator)
{
    // program for a simple calculator
// take the operator input
let result;
// using if...else if... else
if (operator === '+') {
    result = parseInt(number1) + parseInt(number2);
}
else if (operator === '-') {
    result = parseInt(number1) - parseInt(number2);
}
else if (operator === '*') {
    result = parseInt(number1) * parseInt(number2);
}
else {
    result = parseInt(number1) / parseInt(number2);
}
// display the result
console.log(`${number1} ${operator} ${number2} = ${result}`);
return (`${number1} ${operator} ${number2} = ${result}`);
}

// let calculator=calc();
let calcu = `function calc(number1, number2, operator)
{
    // program for a simple calculator
// take the operator input
let result;
// using if...else if... else
if (operator === '+') {
    result = parseInt(number1) + parseInt(number2);
}
else if (operator === '-') {
    result = parseInt(number1) - parseInt(number2);
}
else if (operator === '*') {
    result = parseInt(number1) * parseInt(number2);
}
else {
    result = parseInt(number1) / parseInt(number2);
}
// display the result
console.log('{number1} {operator} {number2} = {result}');
return ('{number1} {operator} {number2} = {result}');
}

const [thisNum1, setNum1] = React.useState(0);
    const [thisNum2, setNum2] = React.useState(0);
    const [thisNum3, setNum3] = React.useState('');
    const [thisSubmit, setSubmit] = React.useState(0);

    const handleChange1 = (event) => { setNum1(event.target.value); setSubmit(0); }
    const handleChange2 = (event) => { setNum2(event.target.value); setSubmit(0); }
    const handleChange3 = (event) => { setNum3(event.target.value); setSubmit(0); }

    const handleSubmit = () => {
        if(thisSubmit === 0) { setSubmit(1); }

    }

    let finalResult;
    console.log(thisNum1);
    console.log(thisNum2);
    console.log(thisNum3);
    if(thisNum1 != 0 && thisNum2 != 0 && thisNum3 != '' )
    {
        finalResult = calc(thisNum1, thisNum2, thisNum3);
    }`

export default function OperatorCalc() {
    const [thisNum1, setNum1] = React.useState(0);
    const [thisNum2, setNum2] = React.useState(0);
    const [thisNum3, setNum3] = React.useState('');
    const [thisSubmit, setSubmit] = React.useState(0);

    const handleChange1 = (event) => { setNum1(event.target.value); setSubmit(0); }
    const handleChange2 = (event) => { setNum2(event.target.value); setSubmit(0); }
    const handleChange3 = (event) => { setNum3(event.target.value); setSubmit(0); }

    const handleSubmit = () => {
        if(thisSubmit === 0) { setSubmit(1); }

    }

    let finalResult;
    console.log(thisNum1);
    console.log(thisNum2);
    console.log(thisNum3);
    if(thisNum1 !== 0 && thisNum2 !== 0 && thisNum3 !== '' )
    {
        finalResult = calc(thisNum1, thisNum2, thisNum3);
    }
    

    return(
        <>
        <title>Mini Calculator</title>
        <section>
        <div className='container'>
            <h1 style={{textAlign:"center", marginTop:"30px",fontWeight:"800"}}>Operators Calculator</h1>
        <div className='row'>
            <div className='mt-5 col-md-6 mb-5'>
                <h2>Operations through Mini Calculator</h2>
                <div className='input newLineRender'>
                    {calcu}
                </div>
            </div>
            <div className='mt-5 col-md-6'>             
                <h2>Output of the Program</h2>
                <div className="newLineRender output" style={{padding:"50px"}}>
                    <form id='dataForm'>
                    <label>Enter Your 1st Number:</label><br/>
                    <input className='mt-1 mb-3' onChange = {handleChange1} type='text' placeholder='Enter Number 1'/><br/>
                    <label>Enter Your 2nd Number:</label><br/>
                    <input className='mt-1 mb-3' onChange = {handleChange2} type='text' placeholder='Enter Number 2'/><br/>
                    <label>Enter Operator to operate: (+, -, *, /)</label><br/>
                    <input className='mt-1 mb-3' onChange = {handleChange3} type='text' placeholder='Enter Operator'/><br/>
                    </form>
                    <button form="dataForm" className='btn btn-primary mt-3' type='submit' onClick={handleSubmit}>SUBMIT</button>
                    <br/>
                    <label className='mt-5 mb-1'>Your Output is:</label>
                    <br/>
                    <RenderResult doRender = {thisSubmit} myResult = {finalResult}/>
                    
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
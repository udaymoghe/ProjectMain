import React from 'react';

let rev = `const [thisNum1, setNum1] = React.useState(0);
const [thisSubmit, setSubmit] = React.useState(0);

const handleChange1= (event) => {
    setNum1(event.target.value); 
    setSubmit(0);
}
const handleSubmit = () => {
    if(thisSubmit === 0) 
    { 
        setSubmit(1); 
    }
}

function reverseString(str) {
    // empty string
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

// take input from the user
//const string = prompt('Enter a string: ');

let string = thisNum1;  
const result = reverseString(string);
// console.log(result);`

export default function Reversestring() {
    const [thisNum1, setNum1] = React.useState(0);
    const [thisSubmit, setSubmit] = React.useState(0);

    const handleChange1= (event) => {
        setNum1(event.target.value); 
        setSubmit(0);
    }
    const handleSubmit = () => {
        if(thisSubmit === 0) 
        { 
            setSubmit(1); 
        }
    }

    function reverseString(str) {
        // empty string
        let newString = "";
        for (let i = str.length - 1; i >= 0; i--) {
            newString += str[i];
        }
        return newString;
    }
    
    // take input from the user
    //const string = prompt('Enter a string: ');
    
    let string = thisNum1;  
    const result = reverseString(string);
    // console.log(result);
    
    return (
    <>
            <title>Reverse of String</title>
        <section>
        <div className='container'>
            <h1 style={{textAlign:"center", marginTop:"30px",fontWeight:"800"}}>Reverse of String</h1>
        <div className='row'>
            <div className='mt-5 col-md-6 mb-5'>
                <h2>String Reverse</h2>
                <div className='input newLineRender'>
                    {rev}
                </div>
            </div>
            <div className='mt-5 col-md-6'>             
                <h2>Output of the Program</h2>
                <div className="newLineRender output" style={{padding:"50px"}}>
                    <form id='dataForm'>
                    <label>Enter Your String:</label><br/>
                    <input className='mt-1 mb-3' onChange = {handleChange1} type='text' placeholder='Enter your string: '/><br/>
                    </form>
                    <button form="dataForm" className='btn btn-primary mt-3' type='submit' onClick={handleSubmit}>SUBMIT</button>
                    <br/>
                    <label className='mt-5 mb-1'>Your Output is:</label>
                    <br/>
                    <StringReverse doRender = {thisSubmit} myResult = {result}/>

                </div>
            </div>
        </div>
        </div>
    </section>
    </>
  )
}
const StringReverse = (props) => {
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
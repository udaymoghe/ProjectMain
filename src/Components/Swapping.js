import React from 'react'

let swap = `let a = prompt("Enter the 1st number: ");
let b = prompt("Enter the 2nd number: ");

console.log("Before swapping the value of a is: , {a}");
console.log("Before swapping the value of b is: , {b}");
let temp;
temp=a;
a=b;
b=temp;
console.log("After swapping the value of a is: , {a}");
console.log("After swapping the value of b is: , {b}");
`
export default function Swapping() {
const [thisNum1, setNum1] = React.useState(0);
const [thisNum2, setNum2] = React.useState(0);
const [thisSubmit, setSubmit] = React.useState(0);

const handleChange1= (event) => {setNum1(event.target.value); setSubmit(0);}
const handleChange2 = (event) => {setNum2(event.target.value); setSubmit(0);}
const handleSubmit = () => {
    if(thisSubmit === 0) 
    { 
        setSubmit(1); 
    }
}

// console.log(`Before swapping the value of a is: , ${a}`);
// console.log(`Before swapping the value of b is: , ${b}`);


let temp;
let a = thisNum1;
let b = thisNum2;
temp = a;
a = b;
b = temp;

let beforeArray = [thisNum1, thisNum2];
let afterArray = [a,b];

// console.log(dataArray);

let beforecomponentArr = beforeArray.map( (item) =>{
    return (
        <p>Before swapping the value is: {item}</p>
    );
});

let aftercomponentArr = afterArray.map( (item) =>{
    return (
        <p>After swapping the value is: {item}</p>
    );
});

// console.log(`After swapping the value of a is: , ${a}`);
// console.log(`After swapping the value of b is: , ${b}`);


  return (
    <>
        <title>Swapping of Two No.</title>
        <section>
        <div className='container'>
            <h1 style={{textAlign:"center", marginTop:"30px",fontWeight:"800"}}>Swapping of Two No.</h1>
        <div className='row'>
            <div className='mt-5 col-md-6 mb-5'>
                <h2>Swapping of two numbers:</h2>
                <div className='input newLineRender'>
                    {swap}
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
                    </form>
                    <button form="dataForm" className='btn btn-primary mt-3' type='submit' onClick={handleSubmit}>SUBMIT</button>
                    <br/>
                    <label className='mt-5 mb-1'>Your Output is:</label>
                    <br/>
                    {/* {componentArr}                     */}
                    
                    <Result canRender={thisSubmit} beforecomponentArr={beforecomponentArr} aftercomponentArr={aftercomponentArr} />
                    
                </div>
            </div>
        </div>
        </div>
        </section>
        </>
  )
}

const Result = (props) => {
    if(props.canRender === 1){
        return(
            <div>
            {props.beforecomponentArr}
            <br/>
            {props.aftercomponentArr}
            </div>
        );
    }
    else {
        return(
            <div>
            <p>
            NO RESULT TO PRINT YET ...
            </p>
            </div>
        );
    }
}
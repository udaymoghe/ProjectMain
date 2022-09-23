import React from 'react';
import '../CSS/cards.css';

function Multi() {
    const number = parseInt(3);
    let res = ``;
    //creating a multiplication table
    for(let i = 1; i <= 10; i++) {
        // multiply i with number
        const result = i * number;
        // display the result
        console.log(`${number} * ${i} = ${result}`);
        res = res + (`${number} * ${i} = ${result} \n`);
    }
    return res;     
}

let mul = Multi();
let muls = `function Multi() {
    const number = parseInt(3);
    //creating a multiplication table
    for(let i = 1; i <= 10; i++) {
        // multiply i with number
        const result = i * number;
        // display the result
        console.log('{number} * {i} = {result}');
        console.log('{number} * {i} = {result}');
        res = res + ({number} *{i} = {result}"\\n"');
    }
    return res;
}`

export default function Multiplication()
{
    return(
        <>
        <title>Multiplication Table</title>
        <section>
        <div className='container'>
            <h1 style={{textAlign:"center", marginTop:"30px",fontWeight:"800"}}>Table of Given Number</h1>
        <div className='row'>
            <div className='mt-5 col-md-6 mb-5'>
                <h2>Program of the Pattern</h2>
                <div className='input newLineRender'>
                    {muls}
                </div>
            </div>
            <div className='mt-5 col-md-6'>             
                <h2>Output of the Program</h2>
                <div className="newLineRender output">
                    {mul}
                </div>
            </div>
        </div>
        </div>
        </section>
        </>
    )
}
import React from 'react';
import '../../CSS/cards.css';

function DownPyramids() {
    let n =5;
    let string = '';
    for(let i = 0; i<n; i++)
    {
        for(let j=0; j<n-i; j++)
        {
            string += "*";
        }
        string += "\n";
    }
    console.log(string);
    return string;
}

let DownPyramidss = DownPyramids();
let down = `function DownPyramids() {
    let n =5;
    let string = '';
    for(let i = 0; i<n; i++)
    {
        for(let j=0; j<n-i; j++)
        {
            string += "*";
        }
        string += "\\n";
    }
    console.log(string);
    return string;
}`

export default function DownPyramid()
{
    return(
        <>
        <title>Down Pattern</title>
        <section>
        <div className='container'>
            <h1 style={{textAlign:"center", marginTop:"30px",fontWeight:"800"}}>Down Triangle Pattern</h1>
        <div className='row'>
            <div className='mt-5 col-md-6 mb-5'>
                <h2>Program of the Pattern</h2>
                <div className='input newLineRender'>
                    {down}
                </div>
            </div>
            <div className='mt-5 col-md-6'>             
                <h2>Output of the Program</h2>
                <div className="newLineRender output">
                    {DownPyramidss}
                </div>
            </div>
        </div>
        </div>
        </section>
        </>
    );
}
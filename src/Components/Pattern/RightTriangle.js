import React from 'react';
import '../../CSS/cards.css';

function RightATriangle() {
    let n = 5;
    let string = "";
    for (let i = 1; i<=n; i++) {
      // printing spaces
      for (let j = 0; j<n-i; j++) {
        string += " ";
      }
      // printing star
      for (let k = 0; k<i; k++) {
        string += "*";
      }
      string += "\n";
    }
    console.log(string);
    return string;
}

let RightAATriangle = RightATriangle();
let right = `function RightATriangle() {
  let n = 5;
  let string = "";
  for (let i = 1; i<=n; i++) {
    // printing spaces
    for (let j = 0; j<n-i; j++) {
      string += " ";
    }
    // printing star
    for (let k = 0; k<i; k++) {
      string += "*";
    }
    string += "\\n";
  }
  console.log(string);
  return string;
}`

export default function RightTriangle()
{
  return(
    <>
    <title>Right Triangle</title>
    <section>
    <div className='container'>
        <h1 style={{textAlign:"center", marginTop:"30px",fontWeight:"800"}}>Right Triangle</h1>
    <div className='row'>
        <div className='mt-5 col-md-6 mb-5'>
            <h2>Program of the Pattern</h2>
            <div className='input newLineRender'>
                {right}
            </div>
        </div>
        <div className='mt-5 col-md-6'>             
            <h2>Output of the Program</h2>
            <div className="newLineRender output">
                {RightAATriangle}
            </div>
        </div>
    </div>
    </div>
    </section>
    </>
  )
}
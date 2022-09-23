import React from 'react'

let fibo = `// program to generate fibonacci series up to n terms
const number = 10;
let n1 = 0, n2 = 1, nextTerm;
let finalSeries = [];
console.log('Fibonacci Series:');
for (let i = 1; i <= number; i++) {
    finalSeries.push(n1, '\\n');
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}`


export default function Fibonacci() {

const number = 10;
let n1 = 0, n2 = 1, nextTerm;
let finalSeries = [];
console.log('Fibonacci Series:');
for (let i = 1; i <= number; i++) {
    finalSeries.push(n1, '\n');
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}

return (
    <>
    <section>
      <title>Fibonacci Series</title>
      <div className='container'>
        <div className='row'>
        <div className='mt-5 col-md-6 mb-5'>
                <h2>Fibonacci Series</h2>
                <div className='input newLineRender'>
                    {fibo}
                </div>
            </div>
            <div className='mt-5 col-md-6'>             
                <h2>Output of the Program</h2>
                <div className="newLineRender output">
                    <label>
                      Fibonacci Series:
                    </label><br/>
                    {finalSeries}
                </div>
            </div>
        </div>
      </div>
    </section>
    </>
  )
}

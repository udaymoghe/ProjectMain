import React from 'react'

function asci()    
{
    let newstring ='';
    for(let i = 65; i <= 90; i++)
    {
        newstring = newstring + "   " + (String.fromCharCode(i));
    }
    return newstring;
}

let news = asci();

let asc = `let newstring='';
for(let i = 65; i <= 90; i++)
{
    newstring=console.log(String.fromCharCode(i));
    return newstring;
}`

export default function Ascii() {
  return (
    <>
      <title>ASCII Character</title>
        <section>
        <div className='container'>
            <h1 style={{textAlign:"center", marginTop:"30px",fontWeight:"800"}}>ASCII Character</h1>
        <div className='row'>
            <div className='mt-5 col-md-6 mb-5'>
                <h2>ASCII Character</h2>
                <div className='input newLineRender'>
                    {asc}
                </div>
            </div>
            <div className='mt-5 col-md-6'>             
                <h2>Output of the Program</h2>
                <div className="newLineRender output" style={{padding:"30px"}}>
                    {news}
                    </div>
            </div>
        </div>
        </div>
    </section>
    </>
  )
}

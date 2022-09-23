import React from 'react';
// import { data, datas } from './pyramid';
import '../../CSS/cards.css';

function Pyramids() {
    let n = 5;
    let string = '';
    for(let i=0;i<n;i++)
    {
        for(let j=0;j<n;j++)
        {   
            string+= "*";
        }
        string+= "\n";
    }
    console.log(string);
    return string;
}

let SquarePyramidString = Pyramids();
let sourcecode = ` function Pyramids() {
     let n = 5;
     let string = '';
     for(let i=0;i<n;i++)
     {
         for(let j=0;j<n;j++)
         {   
             string+= "*";
         }
         string+= "\\n";
     }
     console.log(string);
     return string;
}
`

export default function SquarePyramids()
{
    return (
        <>
        <title> Square Pyramid</title>
        <section>
            <div className='container'>
                <h1 style={{textAlign:"center", marginTop:"30px",fontWeight:"800"}}> Square Pyramid</h1>
            <div className='row'>
                <div className='mt-5 col-md-6 mb-5'>
                    <h2>Program of the Pattern</h2>
                    <div className='input newLineRender'>
                        {sourcecode}
                    </div>
                </div>
                <div className='mt-5 col-md-6'>
                    <h2>Output of the Pattern</h2>
                <div className='newLineRender output mb-5'>{SquarePyramidString}</div>
                </div>
            </div>
            </div>
        </section>
        </>
    );
}
    //   return (
    //     <div>{data}<br/>{datas}</div>
    //   )

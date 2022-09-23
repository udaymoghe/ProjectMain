import React from 'react';
import '../CSS/cards.css';


let a=[[2,8,7],[7,1,3],[1,9,5]]
var temp = 0;
var temp1=0;
function array(a)
{
    for(let i=0; i<a.length; i++)
    {
    for(let j=0;j<a[i].length; j++)
    {
        temp =a[i][j]+temp;
    }
    if(temp>temp1)
    {
        temp1=temp;
    }
    temp=0;
}
// console.log(temp1);
return temp1;
}
let ars=array(a);
console.log(ars);



let sumof = `let a=[[2,8,7],[7,1,3],[1,9,5]]
var temp = 0;
var temp1=0;
function array(a)
{
    for(let i=0; i<a.length; i++)
    {
    for(let j=0;j<a[i].length; j++)
    {
        temp =a[i][j]+temp;
    }
    if(temp>temp1)
    {
        temp1=temp;
    }
    temp=0;
}
// console.log(temp1);
return temp1;
}
let ars=array(a);
console.log(ars);`

export default function Sumtono()
{
    return(
        <>
        <title>Sum of Two no.</title>
        <section>
        <div className='container'>
            <h1 style={{textAlign:"center", marginTop:"30px",fontWeight:"800"}}> Sum of two numbers</h1>
        <div className='row'>
            <div className='mt-5 col-md-6 mb-5'>
                <h2>Program of the Pattern</h2>
                <div className='input newLineRender'>
                    {sumof}
                </div>
            </div>
            <div className='mt-5 col-md-6'>             
                <h2>Output of the Program</h2>
                <div className="newLineRender output">
                    <p>
                    Input: accounts = [[1,2,3],[3,2,1]] <br/>
                    Output: 6<br/>
                    Explanation:<br/>
                    1st customer has wealth = 1 + 2 + 3 = 6<br/>
                    2nd customer has wealth = 3 + 2<br/>
                    let a=[[1,2,3],[3,2,1]];<br/>
                    </p>
                    <p>Sum of the maximum number is: </p>{ars}
                </div>
            </div>
        </div>
        </div>
        </section>
        </>
    )
}
import React from 'react'


function Mul() 
{
  const num = parseInt(5);
  let r = '';

  for(let i=0;i<=10;i++)
  {
    const  result = i * num;
    console.log(`${num} * ${i} = ${result}`);
    r= r + (`${num} * ${i} = ${result} \n`);
  }
  return r;
}

Mul();

export default function Trial() {
   
  return (
    <div>Trial for the try</div>
    
  )
}

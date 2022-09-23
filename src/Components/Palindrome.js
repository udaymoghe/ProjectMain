import React from 'react';
import '../CSS/cards.css';

function checkPalindrome(string) 
{
    // find the length of a string
    const len = string.length;
    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {
        // check if first and last string are same
        if (string[i] !== string[len - 1 - i]) {
            return `${string} - It is NOT a Palindrome.`;
        }
    }
    return `${string} - It is a Palindrome.`;
}
// take input
const string = "MALAYALAM";
// call the function
const value = checkPalindrome(string);
console.log(value);

let print = `function checkPalindrome(string) 
{
    // find the length of a string
    const len = string.length;
    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {
        // check if first and last string are same
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}
// take input
const string = "MALAYALAM";
// call the function
const value = checkPalindrome(string);
console.log(value);`

export default function Palindrome()
{
    return(
            <>
            <title>Palindrome to be check</title>
            <section>
            <div className='container'>
                <h1 style={{textAlign:"center", marginTop:"30px",fontWeight:"800"}}>Palindrome???</h1>
            <div className='row'>
                <div className='mt-5 col-md-6 mb-5'>
                    <h2>To Check Palindrome</h2>
                    <div className='input newLineRender'>
                        {print}
                    </div>
                </div>
                <div className='mt-5 col-md-6'>             
                    <h2>Output of the Program</h2>
                    <div className="newLineRender output">
                        {value}
                    </div>
                </div>
            </div>
            </div>
            </section>
            </>
    )
}

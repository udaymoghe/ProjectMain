import React from 'react'

export default function OrderPizza() {
    
//     function orderPizza(type, name) {    
//     // Query the pizzahub for a store
//     query(`/api/pizzahub/`, function(result, error){
//        if (!error) {
//            let shopId = result.shopId;
           
//            // Get the store and query pizzas
//            query(`/api/pizzahub/pizza/${shopid}`, function(result, error){
//                if (!error) {
//                    let pizzas = result.pizzas;
                   
//                    // Find if my pizza is availavle
//                    let myPizza = pizzas.find((pizza) => {
//                        return (pizza.type===type && pizza.name===name);
//                    });
                   
//                    // Check for the free beverages
//                    query(`/api/pizzahub/beverages/${myPizza.id}`, function(result, error){
//                        if (!error) {
//                            let beverage = result.id;
                           
//                            // Prepare an order
//                            query(`/api/order`, {'type': type, 'name': name, 'beverage': beverage}, function(result, error){
//                               if (!error) {
//                                   console.log(`Your order of ${type} ${name} with ${beverage} has been placed`);
//                               } else {
//                                   console.log(`Bad luck, No Pizza for you today!`);
//                               }
//                            });

//                        }
//                    })
//                }
//            });
//        } 
//     });
// }

// // Call the orderPizza method
//  let op = orderPizza('veg', 'margherita');

  return (
    <>
    <title>Order Pizza</title>
    <section>
        <div className='container'>
              <h1 style={{textAlign:"center", marginTop:"30px",fontWeight:"800"}}>Order Your Pizza</h1>
            <div className='row'>
              <div className='mt-5 col-md-6 mb-5'>
                  <h2>Order Your Pizza</h2>
                  <div className='input newLineRender'>
                      
                  </div>
              </div>
            <div className='mt-5 col-md-6'>             
                  <h2>Output of the Program</h2>
                  <div className="newLineRender output" style={{padding:"50px"}}>
                        <label className='mt-5 mb-1'>Your Output is:</label>
                        <br/> 
                        {/* {op} */}
                    </div>
              </div>
          </div>
          </div>
    </section>
    </>
  )
}

import {plantList} from '../datasTest/plantList'
// import {useState} from 'react';


const categorys = [];
let producted = false;
let productOnCat = [];


    plantList.forEach(function (object) {
    
        let categoryIsUnik = categorys.includes(object.category);
        
        if ( categoryIsUnik === false) {
            categorys.push(object.category);
        }else {
            // send to error page
        }       
    });
//console.log(categorys);


   


  
export default function ShoppingList() {

    function CategorySelected(value){
    const productOnCat = [];
    //console.log(productOnCat)
    
     const keys = value.target.value;
    
    plantList.forEach(function (object){
        let objectIsUnik = productOnCat.includes(keys)
        if (object.category === keys){
            if (objectIsUnik === false){
                productOnCat.push(object)
            }
             
         }
     })
     producted = true;
     console.log(productOnCat)
     console.log(producted);
     //console.log("ok");
     return (   
                productOnCat
        )
     
  }
    return (
        <>
            <ul>
                {
                   categorys.map(cat => 
                                        <li key={cat}>
                                           <button value={cat} onClick={CategorySelected}>
                                                {cat}
                                           </button> 
                                        </li>
                                        )
                }
                {/* {plantList.map(plant => 
                                        <li key={plant.id}>
                                            <p>
                                                {plant.category}
                                            </p>
                                        </li>
                )} */}
            </ul>
            {
                producted &&(
                    productOnCat.map(product =>
                                            <li key={product}>
                                                <p>{product.name}</p>
                                            </li>

                    )
                )
            }
            <ul>
                 {/* <CategorySelected /> */}
            </ul>
        </>

    )
}
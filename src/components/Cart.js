import '../styles/Cart.css'
import { products } from '../Product.js'

const devise = "€";
let totalPrice = 0;
//let listItems;
    
export default function Carts(){
    
    const listItems = products.map(product => <li key={product.id}>
                                                <p>
                                                    {product.name+" "}
                                                    {product.price+" "+devise } 
                                                </p>
                                                </li>)
        products.forEach(function (object) {
                totalPrice += object.price;
            });
    const totalCart = <li>
                        {totalPrice +" "+devise}
                    </li>
      
    return (
        <>
        <h2>
            Panier : 
        </h2>
        <ul>
            {listItems}
        </ul>
        <ul>
           Total : {totalCart}
        </ul>
        </>
);
}
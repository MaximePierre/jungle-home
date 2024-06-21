import '../styles/Cart.css'
import { products } from '../datasTest/Product.js'


const devise = "€";
let totalPrice = 0;
//let listItems;


export default function Carts() {
    
    const listItems = products.map(product => <li key={product.id}>
        <p>
            {product.name + " "}
            {product.price + " " + devise}
        </p>
    </li>)
    products.forEach(function (object) {
        totalPrice += object.price;
    });
    const totalCart = <li>
        {totalPrice + " " + devise}
    </li>

    return (
        <div className="jh-cart-box">
            <h2>
                Panier :
            </h2>
            <ul>
                {listItems}
            </ul>
            <ul>
                Total : {totalCart}
            </ul>
        </div>
    );
}
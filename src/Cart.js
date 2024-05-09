import { products } from './Product.js'

const devise = "€"

export default function Carts(){
    const listItems = products.map(product => <li key={product.id}>
                                                <p>
                                                    {product.name+" "}
                                                    {product.price+" "+devise } 
                                                </p>
                                                </li>)
    return (
        <ul>
            {listItems}
        </ul>
);
}
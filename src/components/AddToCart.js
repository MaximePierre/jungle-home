import {ProductToCart} from "./ProductToCart"




export default function AddToCart(key){
    function handleClick(e){
        ProductToCart(e.target.value)
    }

    
    return (
            <div>
				<button value={key.id} onClick={handleClick}>Ajouter au panier</button>
			</div>
    )
}


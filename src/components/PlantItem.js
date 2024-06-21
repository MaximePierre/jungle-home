import CareScale from './CareScale'
import '../styles/PlantItem.css'
import AddToCart from './AddToCart'



export default function PlantItem({ id, cover, name, water, light, price }) {
	return (
		<li key={id} className='lmj-plant-item' >
			
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			<div className='price-block'>
			{name}
			<p>{price} €</p>
			</div>
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
			<AddToCart
				id={id}
			/>

		</li>
	)
}
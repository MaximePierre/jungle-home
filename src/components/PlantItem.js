import CareScale from './CareScale'
import '../styles/PlantItem.css'

// function handleClick(e){
// 	let o = e.target.alt
// 	console.log(o);
// }

export default function PlantItem({ id, cover, name, water, light }) {
	return (
		<li key={id} className='lmj-plant-item' >
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div >
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	)
}
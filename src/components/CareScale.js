import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'



function HandleClick(e){
	
	const message = "cette plante requiert"
	const iconValue = e.target.alt
	const nbScale = e.target.attributes.value.value;

	const element = 
			iconValue === 'water-icon' ? "d'arrosage" : "lumière";
	const frequency = [
		{
			val : "peu",
			id  : "1"
		},
		{
			val : "modérement",
			id : "2"
		},
		{
			val : "beaucoup",
			id : "3"
		}
	] 
			//TODO: make a sweet alert 
			iconValue === 'water-icon' ? 
			alert(message +" "+ (frequency.find((element) => element.id === nbScale).val) +" "+ element):
			alert(message +" "+ (frequency.find((element) => element.id === nbScale).val) +" de "+ element)
	
}

function CareScale({ scaleValue, careType }) {
	const range = [1, 2, 3]
	const scaleType =
		careType === 'light' ? (
			<img src={Sun} alt='sun-icon' value={scaleValue}/>
		) : (
			<img src={Water} alt='water-icon' value={scaleValue}/>
		)

	return (
		<div  onClick={HandleClick}>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleType}</span>
				) : null
			)}
		</div>
	)
}

export default CareScale
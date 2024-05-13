import {plantList} from '../datasTest/plantList'

export default function ShoppingList() {
    return (
        <>
            <ul>
                {plantList.map(plant => 
                                        <li key={plant.id}>
                                            <p>
                                                {plant.name}
                                            </p>
                                        </li>
                )}
            </ul>
        </>

    )
}
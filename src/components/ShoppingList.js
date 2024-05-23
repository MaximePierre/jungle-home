import { plantList } from '../datasTest/plantList';
import { useState } from 'react';


const categorys = [];


plantList.forEach(function (object) {

    let categoryIsUnik = categorys.includes(object.category);

    if (categoryIsUnik === false) {
        categorys.push(object.category);
    } else {
        // send to error page 
    }
});

export default function ShoppingList() {

    const [selectedCategorie, setselectedCategorie] = useState(plantList)


    return (
        <>
            <label htmlFor="cat-select">Choisir une categorie:</label>
            <select
                name="categorys"
                id="category-selecter"

                onChange={e => {
                    const option = e.target.value;
                    const values = [];
                    plantList.forEach(function (object) {
                        if (object.category === option) {
                            values.push(object)
                        }
                    })
                    setselectedCategorie(values);
                }}>
                <option value="allPlantes">Toutes les plantes</option>
                {
                    categorys.map(cat =>
                        <option key={cat} value={cat}>{cat}</option>
                    )

                }
            </select>
            <ul>
                {selectedCategorie.map(plants =>
                    <li key={plants.id}>
                        {plants.name}
                    </li>
                )
                }
            </ul>
        </>

    )
}
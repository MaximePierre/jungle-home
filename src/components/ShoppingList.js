import { plantList } from '../datasTest/plantList';
import PlantItem from './PlantItem';
import { useState } from 'react';

import '../styles/ShoppingList.css';


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
            {/* component Filter.js a faire */}
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
                        } else if (option === "allPlantes") {
                            values.push(object)
                        }
                    })
                    console.log(option);
                    setselectedCategorie(values);
                }}>
                <option value="allPlantes">Toutes les plantes</option>
                {
                    categorys.map(cat =>
                        <option key={cat}
                            value={cat}
                        >
                            {cat}
                        </option>
                    )

                }
            </select>
            <ul className='lmj-plant-list'>
                {selectedCategorie.map(({ id, cover, name, water, light }) => (
                    <PlantItem
                        key={id}
                        cover={cover}
                        name={name}
                        water={water}
                        light={light}
                    />
                ))
                }
            </ul>
        </>

    )
}
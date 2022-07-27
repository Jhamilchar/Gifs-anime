import { useState } from 'react'
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ "One Punch" ]);

    const onAddCategory = ( newCategory ) => {
        // categories.push(newCategory);

        if( categories.includes(newCategory) ) return;

        setCategories([ newCategory, ...categories ]);
        // setCategories( cat => [ ...cat, "Valorant" ] )
    }

  return (
        <>

            <h1>Busca gifs de tus animes favoritos :3</h1>

            <AddCategory
                onNewCategory= { (event) => onAddCategory(event) }
             />

            {
                categories.map( (category) => (
                    <GifGrid
                    key={ category }
                    category={ category }/>
                ))
            }

        </>
    )
}
// Importamos React
import React, { useState } from 'react'

// Importamos Objetos
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';



const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dargon Ball'];
    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //     // Añadimos una categeria
    //     // setCategories( [...categories, 'HunterXHunter']);
    //     setCategories( cats => [...cats, 'LOLA']);
    // }

    // Devolvemos un header
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />


            {/* <button onClick={ handleAdd }>Agregar</button> */}

            {/* Creamos una lista ordenada con los elementos de categories */}
            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                            key= { category }
                            category={ category } 
                        />
                    ))
                }
            </ol>

        </>
    );

}

export default GifExpertApp;
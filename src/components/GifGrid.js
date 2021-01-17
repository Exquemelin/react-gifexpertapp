// useEffect nos permite ejecutar cógido de forma condicional
import React from 'react' 
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/getGifs';


import { GifGridItem } from './GifGridItem';



export const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([]);

    // Importamos el hook y lo desestructuramos
    const { data:images, loading } = useFetchGifs( category );


    // // Condicionamos el disparo del método getGifs
    // useEffect( () => {
    //     getGifs( category )
    //     // .then( imgs => setImages( imgs ) );
    //     .then( setImages ); // al tener un solo argumento, se puede hacer más corta
    // }, [ category ]); // Si añadimos [] solo se ejecuta cuando es renderizado por primera vez
    // // Si añadimos [category] se vuelve a renderizar


    return (
        <>
            <h3 className="animate__animated animate__fadeIn"> { category } </h3>

            { loading && <p className="animate__animated animate__flash">Loading.....</p>}

            <div className="card-grid">

                {
                    images.map( gif => (
                        // <li key={ gif.id}> {gif.title} </li>
                        // console.log({ ...gif })
                        <GifGridItem 
                            key={ gif.id }
                            { ...gif }
                        />
                    ))
                }

            </div>
        </>
    )
}

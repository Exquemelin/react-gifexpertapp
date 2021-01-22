import { useFetchGifs } from "../../hooks/useFetchGifs"
import { renderHook } from '@testing-library/react-hooks'


// =============== IMPORTANTE ===============
//
// Si uasamos el waitForNextUpdate en una prueba, debemos ponera en el resto
//
// ==========================================

describe('Pruebas con el hook useFetchGifs', () => {

    test('debe retornar el estadio inicial', async () => {

        // Desestructuramos el result que nos devuelve la renderización
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One Punch ') );
        // Obtenemos la data y el loading del result, dentro de su variable current
        const { data, loading } = result.current;

        // Le decimos que espere hasta el update para continuar con la prueba
        await waitForNextUpdate();

        // console.log( result );
        
        // const { data: images, loading } = useFetchGifs( 'One Punch' );

        // console.log(result)

        // console.log(data, loading);
        
        expect( data ).toEqual( [] );
        expect( loading ).toBe( true );
    });

    test('debe de retornar un array de imágenes', async () => {

        // Desestructuramos el result que nos devuelve la renderización
        // waitForNextUpdate nos indica cuando hubo un cambio en el estado
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One Punch ') );
        
        // Le decimos que espere hasta el update para continuar con la prueba
        await waitForNextUpdate();
        
        // Obtenemos la data y el loading del result, dentro de su variable current
        const { data, loading } = result.current;

        expect( data.length ).toBe( 10 );
        expect( loading ).toBe( false );


    })
    
    
    
})

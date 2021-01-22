import { getGifs } from "../../helpers/getGifs"



describe('Pruebas con getGifs Fetch', () => {

    test('debe de traer 10 elementos', async () => {

        const gifs = await getGifs('One PUnch');

        expect( gifs.length ).toBe( 10 );
        
    });

    test('comprobamos si nos devuelve resultados de una categoria', async () => {

        const gifs = await getGifs('');

        // console.log( gifs );

        expect( gifs.length ).toBe( 0 );
        
    });


    
    
});

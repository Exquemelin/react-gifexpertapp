import { shallow } from "enzyme";
import React from 'react';
import '@testing-library/jest-dom';


import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
// Esto simula la llamada al elemento cuya ruta le marcamos. En este caso el useFetchGifs
jest.mock('../../hooks/useFetchGifs');




describe('Pruebas con el componente <GifGrid />', () => {

    // Definimos una variable con una categoría
    const category = 'Gallactica';

    // Declaramos una variable para almacenar el código
    // let wrapper = shallow(<GifGrid category={ category }/>);

    test('debe validar el snapshot', () => {

        // Le decimos que useFetchGifs va a retornar en la simulación la data vacía, y el loading true, que son los datos iniciales
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true,
        });

        const wrapper = shallow(<GifGrid category={ category } />);
        // Comprobamos que coindicina con el snapshot
        expect( wrapper ).toMatchSnapshot();
        
    });

    test('debe de mostrar items cuando se cargan imágenes con useFetchGifs', () => {

        const gifs = [{
            id: 'ABC',
            url: 'http//localhost/cualquier/cosa.jpg',
            title: 'Cualquier Cosa'
        },{
            id: '123',
            url: 'http//localhost/cualquier/cosa.jpg',
            title: 'Cualquier Cosa'
        }]
        
        // Le pasamos datos para la simulación
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false,
        });
        
        const wrapper = shallow(<GifGrid category={ category }/>);

        // Comprobamos que no haya ningún párrafo 'p'
        expect( wrapper.find('p').exists() ).toBe( false );

        // Comprobamos cuantos elementos se renderizaron
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );
        
    });
    
    
    
});

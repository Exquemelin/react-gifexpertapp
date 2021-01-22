import { shallow } from "enzyme";
import React from 'react';


import GifExpertApp from "../GifExpertApp";



describe('Pruebas con el GifExpertApp', () => {

    test('debe renderizarse correctamente', () => {

        const wrapper = shallow(<GifExpertApp />);

        expect( wrapper ).toMatchSnapshot();
        
    });

    test('debe mostrar una lista de categorías', () => {

        const categories = ['One Punch', 'Dragon Ball'];

        const wrapper = shallow(<GifExpertApp defaultCategories={ categories}/>);

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categories.length );
        
    })
    
    
});


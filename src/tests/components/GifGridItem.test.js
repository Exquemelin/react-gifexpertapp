import { shallow } from "enzyme"


import { GifGridItem } from "../../components/GifGridItem"



describe('Pruebas del componente GifGridItem', () => {

    // key='Nueva Key'
    // id='nueva id'
    const url = 'nueva url';
    const title = 'nuevo title';

    // Inicializamos el wrapper como una variable para tener toda la funcionalidad
    let wrapper = shallow( <GifGridItem 
        title={ title }
        url={ url }
    /> );

    test('Debe hacer mostrar <GifGridItem />', () => {
        
        expect ( wrapper ).toMatchSnapshot();

    });

    test('Debe de tener un párrafo con el title', () => {

        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title ) ;
        
    });

    test('debe de tener la imagen igual al url y alt de los props', () => {

        const img = wrapper.find('img');
        // console.log( img.props() ); // Usando props nos extrae las propiedades del objeto. Se podría escoger solo uno de ellos
        expect( img.prop( 'src' )).toBe( url );
        expect( img.prop( 'alt' )).toBe( title );
        
    });

    test('debe de tener animate__fadeIn', () => {

        const div = wrapper.find('div');

        // console.log(div.props());
        // console.log(div.prop('className').endsWith());

        expect( div.prop('className').includes('animate__fadeIn') ).toBe( true );

    });
    
    
    
    
    
})

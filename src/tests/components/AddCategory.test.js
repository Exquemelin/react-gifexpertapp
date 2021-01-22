import { shallow } from "enzyme";
import '@testing-library/jest-dom';


import { AddCategory } from "../../components/AddCategory";



describe('Pruebas en <AddCategory />', () => {

    // Creamos una función vacía para pasársela al componente y probar
    // Usamos una función jest para poder tener más datos de su funcionamiento
    const setCategories = jest.fn(); 

    // Creamos una variable con la que cargamos el componente
    // Se podría inicilizar como " let wrapper; "
    // Pero si lo hacemos igual no nos muestra la ayuda de autocompletado a la hora de ir escribiendo código
    let wrapper = shallow( <AddCategory setCategories={ setCategories } />);

    beforeEach( () => {

        jest.clearAllMocks(); // Limpia si hay alguna función que había
        wrapper = shallow( <AddCategory setCategories={ setCategories } />);
        
    });

    
    test('debe de mostrarse correctamente', () => {

        expect( wrapper ).toMatchSnapshot();
        
    });

    test('debe de cambiar la caja de texto', () => {

        // Obtenemos el input y lo cargamos en una variable
        const input = wrapper.find('input');

        // Simulamos el change directamente, no vamos a hacer el onclick
        // input.simulate('change'); // Si no ponemos nada, mandamos un objeto undefined y nos da error

        // Creamos una variable para introducir en el objeto e.target.value
        const value = 'Gilmore Girls';
        // Mandamos un objeto en el evento
        input.simulate('change', { target: { value } });

        expect( wrapper.find('p').text().trim() ).toBe( value );
        
    });
    
    test('NO debe de postear la información con submit', () => {

        // Simulamos el submit del formulario. Pero al no hacer click, usamos submit a secas
        // preventDefault(){} ==== es igual a ===== preventDefault: () => {}
        wrapper.find('form').simulate('submit', { preventDefault(){} } );

        // Miramos que la función setCategories no se haya llamado, quiere decir que no se han introducido un inputValue válido
        expect( setCategories ).not.toHaveBeenCalled();
        
    });
    
    test('debe de llamar el setCategories y limpiar la caja de texto', () => {

        // 1. simular el inputChange
        // 2. simular el submit
        // 3. se debe haber llamado una vez setCategories
        // 4. el valor del inputValue debe de estar como ''

        // Creamos una variable con el value que vamos a pasar
        const value = 'Gallactica';
        // Cargamos el objeto input del código en una variable
        // const input = wrapper.find('input');
        // Simulamos el input, con el método change
        // input.simulate('change', { target: { value } });
        // ===== Forma Corta =====
        wrapper.find('input').simulate('change', { target: { value } } );
        // Comprobamos que se haya simulado el inputChange
        expect( wrapper.find('p').text().trim() ).toBe( value );

        // Cargamos el objeto form del código en una variable
        // const form = wrapper.find('form');
        // Simulamos el submit, con el método submit
        // form.simulate('submit', {preventDefault(){} });
        // ===== Forma Corta =====
        wrapper.find('form').simulate('submit', { preventDefault(){} } );

        // Comprobamos si se ha llamado el setCategories al menos una vez
        // expect( setCategories ).toBeCalledTimes( 1 ); // También sirve
        expect( setCategories ).toHaveBeenCalled();
        
        // Comprobamos si el setCategories se lanzó con una función dentro
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) );

        // Comprobamos que se haya vaciado el inputValue
        // const p = wrapper.find('p');
        // expect( p.text().trim() ).toBe( '' );
        // ===== Forma Corta =====
        expect( wrapper.find('input').prop('value') ).toBe( '' );
        
    });
    
    
})

import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories })  => {

    // Cremoas una constante que iremos cambiando según varíen los State
    const [inputValue, setInputValue] = useState(''); // Tenemos que poner '' para que no sea un undefined y nos de un warning

    // Usamos un método para modificar la variable inputValue
    const handleInputChange = ( e ) => {
        // console.log(e.target.value);
        setInputValue(e.target.value);

        // Este Console.log es para las pruebas
        console.log('handleInputChange fue lanzado');
    }

    const handleSubmit = ( e ) => {

        // Prevenimos que al hacer submit recarge el formulario
        e.preventDefault();

        // Console.log para las pruebas
        console.log('handleSubmit lanzado', inputValue);

        // Validamos lo que nos entra por el input
        if ( inputValue.trim().length > 2 ) {

            // Activamos el setCategories que nos entra por las props
            setCategories( cats => [inputValue, ...cats] );
            // Y vaciamos el inputValue
            setInputValue('');

        }


    }
    
    // Usamos un form en lugar de un fragment, ya que también agrupa elementos y queremos hacer un formulario
    return (
        <form onSubmit={ handleSubmit }>
            <p> { inputValue } </p> 
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    )

}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
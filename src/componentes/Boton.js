import React, { Children } from 'react';

function Boton(props){
    const esOperador = valor => {
        return isNaN(valor) && (valor != '.') && (valor != '=');
    }; 
    }
    return (
        <div
            className={`boton-contenedor ${esOperador(props.Children) ? 'operador':null}`}>
            {props.Children}

        </div>
    );
}

export default Boton;
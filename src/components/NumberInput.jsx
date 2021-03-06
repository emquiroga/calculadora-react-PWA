import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Resultado from './Resultado'
import { operaciones } from '../helpers/Operaciones'

const NumberInput = () => {
    
    const [numeros, setNumeros] = useState({
        numero1: 10,
        numero2: 5,
    })

    const {handleChange, suma, resta, multi, divi, numero1, numero2} = operaciones(numeros, setNumeros)


    return (
        <>
            <label className="mx-2">
                Número 1: {" "}
                <input 
                name="numero1"
                type="number"
                value={numero1}
                onChange={handleChange}
                >

                </input>
            </label>  
            <label className="mx-2">
                Número 2: {" "}
                <input 
                name="numero2"
                type="number"
                value={numero2}
                onChange={handleChange}
                >

                </input>
            </label>  

            <Resultado operacion="Suma" calculo={suma()}/>
            <Resultado operacion="Resta" calculo={resta()}/>
            <Resultado operacion="Multiplicación" calculo={multi()}/>
            <Resultado operacion="División" calculo={divi()}/>
        </>
    )
}

NumberInput.propTypes = {
name: PropTypes.string
}

export default NumberInput

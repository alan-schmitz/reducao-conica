import React, { useState, useEffect} from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { render } from '@testing-library/react';

function Orcamento(){
    const [diametromaior, setDiametromaior] = useState(0);
    const [diametromenor, setDiametromenor] = useState(0);
    const [altura, setAltura] = useState(0);
    const [valor, setValor] = useState(0);
  
    function calcular(){ 
        const cir = diametromaior * 3.14;
        const area = cir * altura;
        setValor (area * 176);
        }

    return(
        <>
            <h1>Orçamento</h1>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Diametro maior</Form.Label>
                    <Form.Control type="text"
                    placeholder="Emforme o dimametro maior em centimetros"
                    value={diametromaior} 
                    onChange={(e)=>setDiametromaior(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Diametro menor</Form.Label>
                    <Form.Control type="text"
                    placeholder="Emforme o dimametro menor em centimetros" 
                    value={diametromenor} 
                    onChange={(e)=>setDiametromenor(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Altura</Form.Label>
                    <Form.Control type="text"
                    placeholder="Emforme a altura em centimetros"
                    value={altura} 
                    onChange={(e)=>setAltura(e.target.value)}
                    />
                </Form.Group>
                <Button onClick={calcular}>Calcular</Button>

                <h3>Valorda cupula: {valor}</h3>
    


            </Form>
        </>
    );
}
 export default Orcamento;
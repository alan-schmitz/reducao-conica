import React, {useState} from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function Calculadora() {
    const [diametromaior, setDiametromaior] = useState(0);
    const [diametromenor, setDiametromenor] = useState(0);
    const [altura, setAltura] = useState(0);
    const [tang, setTang] = useState(0);
    const [gral, setgral] = useState(0);
    const [cm, setCm] = useState(0);

    function calcular(){
        const deslocamento = (diametromaior - diametromenor)/2;
        const tangente = Math.sqrt(Math.pow(deslocamento, 2) + Math.pow(altura, 2));
        const raioTotal = tangente *(diametromaior/2)/deslocamento;
        const gralTotal = 360*deslocamento/tangente;
        const cordaMaior = raioTotal*(Math.sin(gralTotal/2)*2);
        const raioMenor = raioTotal-tangente;
        setCm(cordaMaior);
        setgral(gralTotal);
        setTang(tangente);
    };

    return(
        <>
            <h1>Calculadora</h1>
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

                <h3>Tangente: {tang}</h3>
                <h3>Graus do Cone: {gral} </h3>
                <h3>Corda Maior: {cm}</h3>
            </Form>
        </>
    );
}
 export default Calculadora;
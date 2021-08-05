import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'


function home(){
    return(
        <Container>
            <h1>Escolha o que você quer fazer:</h1>
            <Row style={{marginTop: 40}}>
                <Button variant="success" size="lg" onClick={() => window.open('/orcamento', "_self")}> 
                    Orçamento 
                </Button>
            </Row>
            <Row style={{marginTop: 40}}>
                <Button variant="warning" size="lg" onClick={() => window.open('/calculadora', "_self")}>
                    Molde de cupula
                </Button>
            </Row>
        </Container>
    );
}
 export default home;
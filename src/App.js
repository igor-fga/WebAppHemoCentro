import React from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap'
import DoadorForm from './js/app/components/DoadorForm'
import DoadorList from './js/app/components/DoadorList'
import { DoadorContextProvider } from './js/app/store'


export default () => {
  return (
    <DoadorContextProvider>
      <Container>
        <Row className="justify-content-center">
          <Col md="12">
            <h1><strong>Cadastramento de Doador</strong></h1>
            <hr className="hr" />
          </Col>
          <DoadorForm />
          <DoadorList />
        </Row>
      </Container>
    </DoadorContextProvider> 
  )
}
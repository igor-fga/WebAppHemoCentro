import React, { useContext, useState } from 'react'
import { DoadorContext } from '../store'
import { Col, Form, FormGroup, Label, Input, Button } from 'reactstrap'

export default () => {
    const nome = useFormInput("")
    const idade = useFormInput("")
    const tiposanguineo = useFormInput("")
    const rg = useFormInput("")
    // eslint-disable-next-line no-unused-vars
    const [state, dispatch] = useContext(DoadorContext)

    const request = (data) => {
        fetch('http://localhost:8081/v1/doadores', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(response => {
                console.log("Data Saved");
            });
    }

    const onSubmit = event => {

        const data = {
            nome: nome.value, idade: idade.value, tiposanguineo: tiposanguineo.value,
            rg: rg.value
        }

        event.preventDefault()
        dispatch({
            type: "ADD_DOADOR",
            payload: data
        })

        request(data);
    };



    return (
        <Col className="form" md="4">
            <Form onSubmit={onSubmit}>
                <FormGroup>
                    <Label>Nome:</Label>

                    <Input {...nome} type="text" name="nome" required autoFocus />
                </FormGroup>
                <FormGroup>
                    <Label>Idade:</Label>
                    <Input {...idade} type="text" name="idade" required />
                </FormGroup>
                <FormGroup>
                    <Label>Tipo Sanguineo:</Label>
                    <Input {...tiposanguineo} type="text" name="tiposanguineo" required />
                </FormGroup>
                <FormGroup>
                    <Label>RG:</Label>
                    <Input {...rg} type="text" name="rg" required />
                </FormGroup>

                <Button color="primary" size="lg" block>Adicionar</Button>
            </Form>
        </Col>

    )

}

function useFormInputChecked(initialValue) {
    const [value, setValue] = useState(initialValue)
    const handleChange = e => {
        setValue(e.target.checked)
    }
    return {
        value,
        onChange: handleChange
    }
}

function useFormInput(initialValue) {
    const [value, setValue] = useState(initialValue)
    const handleChange = e => {
        setValue(e.target.value)
    }
    return {
        value,
        onChange: handleChange
    }
}
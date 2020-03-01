
// @flow

import React, { CSSProperties } from "react";
import Input from "../Forms/Input";
import FormControl from "../Forms/FormControl";
import { Button, Row, Col, FormGroup, Label, Input as InputBS } from "reactstrap";

const style: CSSProperties = {
    minHeight: 300
}

const control = new FormControl({
    errors: {},
    reset() { },
    validate() { return true },
});

const imgStyle: CSSProperties = {
    width: '100%'
}

const Business = () => {
    return (
        <div style={style}>
            <Row>
                <Col>
                    <Row>
                        <Col>
                            <Input control={control} name='busisness' title="Razón social" />
                        </Col>
                        <Col>
                            <Input control={control} name='nit' title="Nit" />
                        </Col>
                    </Row>
                    <Input
                        control={control}
                        name='legal_representative'
                        title="Representante legal" />
                    <Input control={control} name='website' title="Sitio web" />
                    <Row>
                        <Col>
                            <Input control={control} name='address' title="Dirección" />
                        </Col>
                        <Col>
                            <Row>
                                <Col>
                                    <Input control={control} name='country' title="Pais" />
                                </Col>
                                <Col>
                                    <Input control={control} name='city' title="Ciudad" />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <FormGroup>
                        <Label>Actividad económica</Label>
                        <InputBS type='textarea' />
                    </FormGroup>
                    <Button color='primary'>Guardar</Button>
                </Col>
                <Col md={4}>
                    <div>Logo</div>
                    <img
                        src="https://www.w3schools.com/bootstrap4/cinqueterre.jpg"
                        style={imgStyle}
                        className="rounded" alt="Cinque Terre" />
                </Col>
            </Row>
        </div>
    )
}

export default Business;


import React, { Fragment } from 'react';
import { Form, FormGroup, Label, Input, Col, Row, Alert } from 'reactstrap';
import { createContext } from 'react';

interface IDefaultContextState {
    number: '',
    expiration_month: '',
    expiration_year: '',
    cvv: '',
    errors: {
        cvv: '',
        expiration: '',
        number: '',
        error: ''
    }
}

const defaultContextState = {
    number: '',
    expiration_month: '',
    expiration_year: '',
    cvv: '',
    errors: {
        cvv: '',
        expiration: '',
        number: '',
        error: ''
    }
}

export const Context = createContext(defaultContextState);

export const validate = (state) => {
    var ok = true;
    var errors = { cvv: '', number: '', expiration: '' };
    if (!/^[0-9]{16,20}$/.test(state.number)) {
        errors.number = 'El numero no es valido';
        ok = false;
    }
    const expiration = `${state.expiration_month}/${state.expiration_year}`
    if (!/^(0?[0-9]|1[0-2])\/[0-9][0-9]$/.test(expiration)) {
        errors.expiration = 'La fecha de expiracoón no es valida';
        ok = false;
    }
    console.log(state, state.cvv);
    if (!/^[0-9]{3,4}$/.test(state.cvv)) {
        errors.cvv = 'El codigo de verificación no es valido';
        ok = false;
    }
    return [ok, errors];
}

interface PaymentMethodsProps {
    onChange: (key: String, value: any) => void
}

interface RenderErrorProps {
    msg: String
}

const RenderError = ({ msg }: RenderErrorProps) => {
    return msg ? <><br /><Alert color='danger'>{msg}</Alert></> : false
}

const formatNumber = (number: String) => {
    let n = parseInt(number.length / 4);
    let s = [];
    if (n === 0) return number
    for (let i = 0; i <= n; i++) {
        var v;
        if (i < n) v = number.substring(i * 4, (i + 1) * 4);
        else v = number.substring(i * 4);
        s.push(v)
    }
    return s.join('-').replace(/-$/, '');
}

class PaymentMethods extends React.PureComponent<PaymentMethodsProps> {
    context: IDefaultContextState
    onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let { name, value } = e.target;
        if (/expiration/.test(name))
            if (value.length > 2) return;
        if (name === 'expiration_month')
            if (!/^(0[0-9]|1[0-2]|[0-9]{0,1})$/.test(value)) return;
        if (name === 'cvv')
            if (!/^[0-9]{0,4}$/.test(value)) return;
        if (name === 'number')
            value = value.replace(/-/g, '');
        if (!/^[0-9-]{0,20}$/.test(value)) return;
        this.props.onChange(name, value);
    }
    onExpirationKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
        if (!/[0-9]/.test(e.key)) {
            e.preventDefault();
        }
    }
    render() {
        return (
            <Fragment>
                <Form>
                    <FormGroup>
                        <Label>Numero</Label>
                        <Input
                            type='text' name='number'
                            value={formatNumber(this.context.number)}
                            onChange={this.onChange} />
                        <RenderError msg={this.context.errors.number} />
                    </FormGroup>
                    <Row>
                        <Col>
                            <FormGroup>
                                <Label>Fecha de expiración</Label>
                                <Row>
                                    <Col>
                                        <Input
                                            type='text' name='expiration_month'
                                            value={this.context.expiration_month}
                                            onKeyPress={this.onExpirationKeyPress}
                                            onChange={this.onChange} />
                                    </Col>
                                    <span style={{ paddingTop: 6 }}>/</span>
                                    <Col>
                                        <Input
                                            type='text' name='expiration_year'
                                            value={this.context.expiration_year}
                                            onKeyPress={this.onExpirationKeyPress}
                                            onChange={this.onChange} />
                                    </Col>
                                </Row>
                                <RenderError msg={this.context.errors.expiration} />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label>Codigo de verificación</Label>
                                <Input
                                    type='text' name='cvv'
                                    value={this.context.cvv}
                                    onChange={this.onChange} />
                                <RenderError msg={this.context.errors.cvv} />
                            </FormGroup>
                        </Col>
                    </Row>
                    <RenderError msg={this.context.errors.error} />
                </Form>
            </Fragment>
        )
    }
}

PaymentMethods.contextType = Context;

export default PaymentMethods;
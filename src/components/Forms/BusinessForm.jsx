
// @flow

import React, { createContext } from "react";
import Input from "../Forms/Input";
import InputImage from "../Forms/InputImage";
import { DefaultState } from "../../store/state";
import { Button, Row, Col, FormGroup } from "reactstrap";
import { connect } from "react-redux";
import { BusinessProfile } from "../../models";
import { InputKeyPressValidator } from "../../helper";
import { progresiveNameValid } from "./validator";


export interface IContextState extends BusinessProfile {
    errors: {
        error: '',
        [x: String]: String
    }
}

export const Context = createContext<IContextState>();

export const validate = () => [true, {}];

const mapProps = (state: DefaultState) => ({
    countries: state.countries
});

interface BusinessProps {
    countries: any[],
    onChange: (key: String, value: any) => void,
    onSubmit: () => void
}

class Business extends React.PureComponent<BusinessProps> {

    static contextType = Context;

    context: IContextState

    constructor() {
        super();

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onImgChange = this.onImgChange.bind(this);
    }

    onChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;

        this.props.onChange(name, value);
    }

    onImgChange(value) {
        this.props.onChange('imgSrc', value);
    }

    onSubmit() {
        this.props.onSubmit();
    }

    render() {
        return (
            <Row>
                <Col>
                    <Row>
                        <Col>
                            <Input
                                onKeyPress={InputKeyPressValidator(progresiveNameValid, /.{0,255}/)}
                                onChange={this.onChange}
                                value={this.context.name}
                                name='name'
                                title="Razón social" />
                        </Col>
                        <Col>
                            <Input
                                onKeyPress={InputKeyPressValidator(/^[0-9]{0,20}-?[0-9]?$/)}
                                onChange={this.onChange}
                                value={this.context.nit}
                                name='nit' title="Nit" />
                        </Col>
                    </Row>
                    <Input
                        onChange={this.onChange}
                        onKeyPress={InputKeyPressValidator(progresiveNameValid, /.{0,255}/)}
                        value={this.context.legal_representative}
                        name='legal_representative'
                        title="Representante legal" />

                    <Input
                        onChange={this.onChange}
                        value={this.context.website}
                        name='website' title="Sitio web" />

                    <Row>
                        <Col>
                            <Input
                                type='select'
                                onChange={this.onChange}
                                value={this.context.country}
                                name='country' title="Pais">
                                {this.props.countries.map((c, key) => (
                                    <option key={key} value={c.alpha2Code}>
                                        {c.name}
                                    </option>
                                ))}
                            </Input>
                        </Col>
                        <Col>
                            <Input
                                onKeyPress={InputKeyPressValidator(progresiveNameValid, /.{0,255}/)}
                                onChange={this.onChange}
                                value={this.context.city}
                                name='city' title="Ciudad" />
                        </Col>
                    </Row>

                    <Input
                        onKeyPress={InputKeyPressValidator(/.{0,255}/)}
                        onChange={this.onChange}
                        value={this.context.address}
                        name='address' title="Dirección" />


                    <FormGroup>
                        <Input
                            onKeyPress={InputKeyPressValidator(/.{0,500}/)}
                            onChange={this.onChange}
                            title='Actividad económica'
                            value={this.context.economic_activity}
                            name='economic_activity' type='textarea' />
                    </FormGroup>
                    <Button onClick={this.onSubmit} color='primary'>Guardar</Button>
                </Col>
                <Col md={4}>
                    <div>Logo</div>
                    <InputImage
                        onChange={this.onImgChange}
                        src={this.context.imgSrc} />
                </Col>
            </Row>
        )
    }
}

export default connect(mapProps)(Business);
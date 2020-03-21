
// @flow

import React, { createContext } from "react";
import Input from "../Forms/Input";
import InputImage from "../Forms/InputImage";
import { DefaultState } from "../../store/state";
import { Button, Row, Col, FormGroup } from "reactstrap";
import { connect } from "react-redux";


interface IContextState {
    busisness: '',
    nit: '',
    legal_representative: '',
    website: '',
    address: '',
    country: 'CO',
    city: '',
    economic_activity: '',
    imgSrc: '',
    errors: {
        error: '',
        [x: String]: String
    }
}

export const Context = createContext<IContextState>();

const mapProps = (state: DefaultState) => ({
    countries: state.countries
});

interface BusinessProps {
    countries: any[],
    onChange: (key: String, value: any) => void
}

class Business extends React.PureComponent<BusinessProps> {

    static contextType = Context;

    context: IContextState

    constructor() {
        super();

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

    render() {
        return (
            <Row>
                <Col>
                    <Row>
                        <Col>
                            <Input
                                onChange={this.onChange}
                                value={this.context.busisness}
                                name='busisness'
                                title="Razón social" />
                        </Col>
                        <Col>
                            <Input
                                onChange={this.onChange}
                                value={this.context.nit}
                                name='nit' title="Nit" />
                        </Col>
                    </Row>
                    <Input
                        onChange={this.onChange}
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
                                onChange={this.onChange}
                                value={this.context.city}
                                name='city' title="Ciudad" />
                        </Col>
                    </Row>
                    
                    <Input
                        onChange={this.onChange}
                        value={this.context.address}
                        name='address' title="Dirección" />


                    <FormGroup>
                        <Input
                            onChange={this.onChange}
                            title='Actividad económica'
                            value={this.context.economic_activity}
                            name='economic_activity' type='textarea' />
                    </FormGroup>
                    <Button color='primary'>Guardar</Button>
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
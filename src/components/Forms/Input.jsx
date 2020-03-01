
// @flow

import React, { Fragment } from "react";
import { FormControlComponent } from './FormControl';
import { Input as InputBS, Label, Alert, FormGroup } from "reactstrap";

interface InputProps {
    control: FormControlComponent,
    name: String,
    title: String,
    onChange: (e: React.ChangeEvent<React.InputHTMLAttributes>) => void
}

const Input = (props: InputProps) => (
    <FormGroup>
        <Label for="busisness">{props.title}</Label>
        <InputBS
            type="text" name={props.name} id={props.name}
            value={props.control.state[props.name]}
            onChange={props.onChange} />
        {props.control.state.errors[props.name] ?
            <Fragment>
                <br />
                <Alert color="danger">
                    {props.control.state.errors[props.name]}
                </Alert>
            </Fragment> : false}
    </FormGroup>
)

export default Input;
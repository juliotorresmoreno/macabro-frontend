
// @flow

import React from "react";
import { FormControlComponent } from './FormControl';
import { Input as InputBS, Label, Alert, FormGroup } from "reactstrap";

interface InputProps {
    control: FormControlComponent,
    name: String,
    title: String,
    type: String,
    children: React.ReactChildren,
    onChange: (e: React.ChangeEvent<React.InputHTMLAttributes>) => void
}

const RenderError = ({ msg }) => (
    msg ? <><br /><Alert color="danger">{msg}</Alert></> : false
)

const Input = (props: InputProps) => (
    <FormGroup>
        <Label for="busisness">{props.title}</Label>
        <InputBS
            type={props.type || "text"}
            name={props.name} id={props.name}
            value={props.value}
            onChange={props.onChange}>
            {props.children}
        </InputBS>
        <RenderError msg={props.error} />
    </FormGroup>
)

export default Input;
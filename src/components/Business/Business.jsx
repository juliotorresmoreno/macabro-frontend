
// @flow

import React, { CSSProperties } from "react";
import BusinessForm, { Context } from "../Forms/BusinessForm";
import { useState } from "react";

const style: CSSProperties = {
    minHeight: 300
}

const Business = () => {
    const [state, setState] = useState({
        busisness: '',
        nit: '',
        legal_representative: '',
        website: '',
        address: '',
        country: 'CO',
        city: '',
        economic_activity: '',
        imgSrc: ''
    });

    const onChange = (key: String, value: any) => {
        setState({ ...state, [key]: value });
    }
    return (
        <Context.Provider value={state}>
            <div style={style}>
                <BusinessForm onChange={onChange} />
            </div>
        </Context.Provider>
    )
}

export default Business;
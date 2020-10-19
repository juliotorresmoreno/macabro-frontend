
// @flow

import React, { CSSProperties } from "react";
import BusinessForm, { Context, validate, IContextState } from "../../Forms/BusinessForm";
import { useState } from "react";
import * as business from '../../../actions/business';
import { connect } from "react-redux";
import { DefaultState } from "../../../store/state";
import { BusinessProfile } from "../../../models";
import { Dispatch } from "react";

const style: CSSProperties = {
    minHeight: 300
}

const mapProps = (state: DefaultState) => ({
    business: state.business
})

interface BusinessProps {
    business: BusinessProfile,
    dispatch: Dispatch
}

const Business = (props: BusinessProps) => {
    const [loaded, setLoaded] = useState(0);
    const [state, setState] = useState<IContextState>({
        name: props.business.name,
        nit: props.business.nit,
        legal_representative: props.business.legal_representative,
        website: props.business.website,
        address: props.business.address,
        country: props.business.country,
        city: props.business.city,
        economic_activity: props.business.economic_activity,
        imgSrc: props.business.imgSrc,
        errors: { error: '' }
    });

    if (loaded === 0) {
        setLoaded(1);
        props.dispatch(business.Get())
            .then(function() {
                setLoaded(2);
            });
    }
    if (loaded === 2) {
        setState({
            name: props.business.name,
            nit: props.business.nit,
            legal_representative: props.business.legal_representative,
            website: props.business.website,
            address: props.business.address,
            country: props.business.country,
            city: props.business.city,
            economic_activity: props.business.economic_activity,
            imgSrc: props.business.imgSrc,
            errors: { error: '' }
        });
        setLoaded(3);
    }

    const onChange = (key: string, value: any) => {
        setState({ ...state, [key]: value });
    }

    const onSubmit = async () => {
        const data = { ...state };
        delete data.errors;
        const [has, errors] = validate(data);
        if (!has) {
            setState({ ...state, errors });
            return;
        }
        await props.dispatch(business.Patch(data));
        props.dispatch(business.Get());
    }

    return (
        <Context.Provider value={state}>
            <div style={style}>
                <BusinessForm onSubmit={onSubmit} onChange={onChange} />
            </div>
        </Context.Provider>
    )
}

export default connect(mapProps)(Business);
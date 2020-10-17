

// @flow

import React from 'react';
import ProfileForm, { Context, validate } from '../../Forms/ProfileForm';
import * as profile from '../../../actions/profile';
import store from '../../../store';
import { useState } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { DefaultState } from '../../../store/state';
import { UserProfile } from '../../../models';
import { parseError } from '../../../helper';

const mapProps = (state: DefaultState) => ({
    profile: state.auth.profile
});

interface ProfileProps {
    profile: UserProfile,
    dispatch: Dispatch
}

const from_date = (date) => {
    var t = new Date(Date.parse(date));
    if (typeof t.toJSON !== 'function') {
        return '';
    }
    return t.toJSON().substr(0, 10);
}

const Profile = (props: ProfileProps) => {
    const [state, setState] = useState({
        name: props.profile.name,
        lastname: props.profile.lastname,
        document_type: props.profile.document_type,
        expedite: from_date(props.profile.expedite),
        document: props.profile.document,
        date_birth: from_date(props.profile.date_birth),
        imgSrc: props.profile.imgSrc,
        country: props.profile.country,
        nationality: props.profile.nationality,
        facebook: props.profile.facebook,
        linkedin: props.profile.linkedin,

        errors: {
            error: ''
        }
    });
    const onChange = (key: String, value: String) => {
        setState({ ...state, [key]: value });
    }
    const onSubmit = async () => {
        try {
            const [ok, errors] = validate(state);
            if (!ok) {
                return setState({ ...state, errors });
            }
            var data = { ...state };
            delete data.errors;
            var to_date = (date): Date => {
                var t = new Date(Date.parse(date));
                return t;
            }
            data.date_birth = to_date(data.date_birth).toISOString();
            data.expedite = to_date(data.expedite).toISOString();
            
            await store.dispatch(profile.Patch(data));
            setState({ ...state, errors: { error: '' } });
            props.dispatch(profile.Get());
        } catch (error) {
            var errors = parseError(error.message);
            setState({ ...state, errors });
            console.trace(errors);
        }
    }
    return (
        <Context.Provider value={state}>
            <ProfileForm onChange={onChange} onSubmit={onSubmit} />
        </Context.Provider>
    )
}

export default connect(mapProps)(Profile);


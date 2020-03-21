

// @flow

import React from 'react';
import ProfileForm, { Context, validate } from '../Forms/ProfileForm';
import * as profile from '../../actions/profile';
import store from '../../store';
import { useState } from 'react';

const Profile = () => {
    const [state, setState] = useState({
        name: '',
        lastname: '',
        document_type: '',
        expedite: '',
        document: '',
        date_birth: '',
        imgSrc: '',
        country: 'CO',
        nationality: 'CO',
        facebook: '',
        linkedin: '',
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
            await store.dispatch(profile.Patch(data));
            setState({ ...state, errors: { error: '' } });
        } catch (error) {
            setState({ ...state, errors: { error: error.message } });
            console.trace(error);
        }
    }
    return (
        <Context.Provider value={state}>
            <ProfileForm onChange={onChange} onSubmit={onSubmit} />
        </Context.Provider>
    )
}

export default Profile;


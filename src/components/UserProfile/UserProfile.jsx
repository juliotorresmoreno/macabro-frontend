

// @flow

import React from 'react';
import ProfileForm, { Context, validate } from '../Forms/ProfileForm';
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
    const onSubmit = (state) => {
        const [ok, errors] = validate(state);
        if (!ok) {
            setState({ ...state, errors });
        }
    }
    return (
        <Context.Provider value={state}>
            <ProfileForm onChange={onChange} onSubmit={onSubmit} />
        </Context.Provider>
    )
}

export default Profile;


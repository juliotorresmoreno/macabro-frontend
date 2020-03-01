

// @flow

import React from 'react';
import ProfileForm from '../Forms/ProfileForm';
import FormControl from '../Forms/FormControl';

const control = new FormControl({
    errors: {},
    reset() { },
    validate() { return true },
});

const Profile = () => <ProfileForm control={control} />;

export default Profile;


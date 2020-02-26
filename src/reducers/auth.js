
// @flow

import { authTypes } from '../actions/actionTypes';
import { ActionSignIn, ActionSignUp } from '../actions/auth';
import { createReducer } from '@reduxjs/toolkit';
import { AuthState } from '../store/state';

const defaultState: AuthState = {
    auth: false,
    profile: {}
};

export default createReducer(defaultState, {
    [authTypes.ActionSignIn]: (state, action: ActionSignIn) => {
        state.auth = true;
        state.profile = action.payload
    },
    [authTypes.ActionSignUp]: (state, action: ActionSignUp) => {
        state.auth = true;
        state.profile = action.payload
    }
});
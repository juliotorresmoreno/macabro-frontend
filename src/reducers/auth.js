
// @flow

import { authTypes } from '../actions/actionTypes';
import { ActionSignIn, ActionSignUp, ActionRedirect } from '../actions/auth';
import { createReducer } from '@reduxjs/toolkit';
import { AuthState } from '../store/state';
import { Action } from 'redux';

const defaultState: AuthState = {
    auth: false,
    profile: {},
    action: '',
    redirect: '-'
};

export default createReducer(defaultState, {
    [authTypes.ActionSignIn]: (state, action: ActionSignIn) => {
        state.auth = true;
        state.profile = action.payload
    },
    [authTypes.ActionSignUp]: (state, action: ActionSignUp) => {
        state.auth = true;
        state.profile = action.payload;
        state.action = '';
    },
    [authTypes.ActionSignInOpenForm]: (state, action: ActionSignIn) => {
        state.action = authTypes.ActionSignInOpenForm
    },
    [authTypes.ActionSignUpOpenForm]: (state, action: ActionSignUp) => {
        state.action = authTypes.ActionSignUpOpenForm
    },
    [authTypes.CloseForm]: (state, action: ActionSignUp) => {
        state.action = '';
    },
    [authTypes.Redirect]: (state, action: ActionRedirect) => {
        state.redirect = action.payload;
    },
    [authTypes.LogOut]: (state, action: Action) => {
        state.auth = false;
        state.profile = {};
        state.action = '';
    }
});
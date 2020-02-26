
// @flow

import { Action } from 'redux';
import { createAction } from '@reduxjs/toolkit';
import { Dispatch } from 'redux';
import { authTypes } from './actionTypes';
import { UserProfile, UserProfileWithPassword } from '../models';
import config from '../config';

export interface Credential {
    username: String,
    password: String
}

export interface ActionSignIn extends Action {
    payload: UserProfile
}

const _SignIn: (c: UserProfile) => ActionSignIn = createAction(authTypes.ActionSignIn);
export const SignIn = (c: Credential) => {
    return async (dispatch: Dispatch, getState): Promise<ActionSignUp> => {
        const url = `${config.server_url}/api/auth/login`;
        const response = await fetch(url, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(c)
        });
        const data: UserProfileWithPassword | { message: String } = await response.json();
        if (!response.ok) {
            throw new Error(data.message);
        }
        return dispatch(_SignIn(data));
    }
}

export interface ActionSignUp extends Action {
    payload: UserProfile
}

const _SignUp: (c: UserProfile) => ActionSignUp = createAction(authTypes.ActionSignUp);
export const SignUp = (user: UserProfileWithPassword) => {
    return async (dispatch: Dispatch, getState): Promise<ActionSignUp> => {
        const url = `${config.server_url}/api/users`;
        const response = await fetch(url, {
            method: 'PUT',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(user)
        });
        const data: UserProfileWithPassword | { message: String } = await response.json();
        if (!response.ok) {
            throw new Error(data.message);
        }
        return dispatch(_SignUp(data));
    }
}
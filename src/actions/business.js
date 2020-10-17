import { Dispatch } from 'redux';
import { createAction, Action } from '@reduxjs/toolkit';
import config from '../config';
import { authTypes, businessTypes } from './actionTypes';
import { BusinessProfile } from '../models';
import { DefaultState } from '../store/state';

export const Patch = (data: BusinessProfile) => {
    return async (dispatch: Dispatch, getState: () => DefaultState) => {
        const state = getState();
        const url = `${config.server_url}/api/business/${state.auth.profile.id}`;
        console.log(JSON.stringify(data));
        const response = await fetch(url, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
            credentials: 'include',
            mode: 'cors'
        });
        if (!response.ok)
            throw new Error((await response.json()).message);
    }
}

const _LogOut = createAction(authTypes.LogOut);
const _Get: (c: BusinessProfile) => Action = createAction(businessTypes.Get);
export const Get = () => {
    return async (dispatch: Dispatch, getState: () => DefaultState) => {
        const state: DefaultState = getState();
        const url = `${config.server_url}/api/business/${state.auth.profile.id}`;
        const response = await fetch(url, {
            method: 'GET',
            credentials: 'include',
            mode: 'cors'
        });
        const data: BusinessProfile | { message: String } = await response.json();
        if (!response.ok) {
            if (response.status === 401)
                return dispatch(_LogOut());
            throw new Error(data.message);
        }
        return dispatch(_Get(data));
    }
}
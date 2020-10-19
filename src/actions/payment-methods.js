// @flow

import { Dispatch } from 'redux';
import { createAction, Action } from '@reduxjs/toolkit';
import config from '../config';
import { paymentMethodsTypes, authTypes } from './actionTypes';
import { PaymentMethod } from '../models';
import { DefaultState } from '../store/state';

export const Put = (data) => {
    return async () => {
        const url = `${config.server_url}/api/payment-methods`;
        const response = await fetch(url, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
            credentials: 'include',
            mode: 'cors'
        });
        if (!response.ok)
            throw new Error((await response.json()).message);
    }
}

export const Patch = (data: PaymentMethod) => {
    return async () => {
        var _data = { ...data };
        delete _data.id;
        const url = `${config.server_url}/api/payment-methods/${data.id}`;
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

export const Delete = (id: Number) => {
    return async () => {
        const url = `${config.server_url}/api/payment-methods/${id}`;
        const response = await fetch(url, {
            method: 'DELETE',
            credentials: 'include',
            mode: 'cors'
        });
        if (!response.ok)
            throw new Error((await response.json()).message);
    }
}

const _LogOut = createAction(authTypes.LogOut);
const _Get: (c: PaymentMethod) => Action<PaymentMethod> = createAction(paymentMethodsTypes.Get);
export const Get = () => {
    return async (dispatch: Dispatch, getState: () => DefaultState) => {
        const state = getState();
        const url = `${config.server_url}/api/payment-methods?user_id=${state.auth.profile.id}`;
        const response = await fetch(url, {
            method: 'GET',
            credentials: 'include',
            mode: 'cors'
        });
        const data: PaymentMethod[] | { message: string } = await response.json();
        if (!response.ok) {
            if (response.status === 401)
                return dispatch(_LogOut());
            throw new Error(data.message);
        }
        data.sort((a: PaymentMethod, b: PaymentMethod) => a.id > b.id)
        return dispatch(_Get(data));
    }
}
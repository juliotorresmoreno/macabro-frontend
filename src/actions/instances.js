
import { createAction } from '@reduxjs/toolkit';
import { instanceTypes } from './actionTypes';
import { Instance } from '../models/instance';
import { Dispatch, Action } from 'redux';
import config from '../config';

type Instances = Array<Instance>;

export interface ActionGet extends Action {
    payload: Instances
}

const _Get: (c: Instances) => ActionGet = createAction(instanceTypes.Get);
export const Get = () => {
    return async (dispatch: Dispatch, getState) => {
        const url = `${config.server_url}/api/instances`;
        const response = await fetch(url, {
            credentials: 'include',
            mode: 'cors'
        });
        const content = await response.json();
        if (!response.ok) {
            throw new Error(content.message)
        }
        const instances: Instances = content;
        return dispatch(_Get(instances));
    }
}

const _Post: (c: Countries) => ActionSignIn = createAction(instanceTypes.Post);
export const Post = (id: string, data: Instance) => {
    return async (dispatch: Dispatch, getState) => {
        const url = `${config.server_url}/api/instances/${id}`;
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
            credentials: 'include',
            mode: 'cors'
        });
        if (!response.ok) {
            const content = await response.json();
            throw new Error(content.message)
        }
        return dispatch(_Post(response));
    }
}

export const Put = (data: Instance) => {
    return async (dispatch: Dispatch, getState) => {
        const url = `${config.server_url}/api/instances`;
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
            credentials: 'include',
            mode: 'cors'
        });
        if (!response.ok) {
            const content = await response.json();
            throw new Error(content.message)
        }
    }
}

export const Delete = (id: string) => {
    return async (dispatch: Dispatch, getState) => {
        const url = `${config.server_url}/api/instances/${id}`;
        const response = await fetch(url, {
            method: 'DELETE',
            credentials: 'include',
            mode: 'cors'
        });
        if (!response.ok) {
            const content = await response.json();
            throw new Error(content.message)
        }
    }
}

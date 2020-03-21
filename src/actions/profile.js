
import config from '../config';

export const Patch = (data) => {
    return async () => {
        const url = `${config.server_url}/api/users`;
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
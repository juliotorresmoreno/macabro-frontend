
// @flow

export function parseError(err: String) {
    if (/^[a-z][a-z0-9]+:/.test(err)) {
        console.log(err);
        var e = {};
        err.split(";").forEach((x: String) => {
            let s = x.split(": ");
            e[s[0].toLowerCase()] = s[1];
        });
        return e;
    }
    return {
        error: err
    }
}

export const InputKeyPressValidator = (...preg_validator: RegExp[]) =>
    (e: React.KeyboardEvent<HTMLInputElement>) => {
        let target: HTMLInputElement = e.target;
        let nvalue = target.value.substr(0, target.selectionStart) +
            e.key + target.value.substr(target.selectionEnd);
        for (let i = 0; i < preg_validator.length; i++) {
            const validator = preg_validator[i];
            if (!validator.test(nvalue)) {
                e.preventDefault();
                return
            }   
        }
    }
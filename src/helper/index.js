
// @flow

export function parseError(err: String) {
    if (/^[a-z][a-z0-9]+:/.test(err)) {
        var e = {};
        err.split(";").forEach((x: String) => {
            let s = x.split(": ");
            e[s[0]] = s[1];
        });
        return e;
    }
    return {
        error: err
    }
}
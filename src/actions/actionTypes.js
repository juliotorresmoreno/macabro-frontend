

const _auth = '@auth';
export const authTypes = {
    ActionSignIn: `${_auth}/ActionSignIn`,
    ActionSignUp: `${_auth}/ActionSignUp`,

    ActionSignInOpenForm: `${_auth}/ActionSignInOpenForm`,
    ActionSignUpOpenForm: `${_auth}/ActionSignUpOpenForm`,
    CloseForm: `${_auth}/CloseForm`,
    Redirect: `${_auth}/Redirect`,
    LogOut: `${_auth}/LogOut`
}

const _country = '@country';
export const countryTypes = {
    Get: `${_country}/Get`
}
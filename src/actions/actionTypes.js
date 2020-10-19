

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

const _profile = '@profile';
export const profileTypes = {
    Get: `${_profile}/Get`
}

const _business = '@business';
export const businessTypes = {
    Get: `${_business}/Get`
}

const _paymentMethods = '@paymentMethods';
export const paymentMethodsTypes = {
    Get: `${_paymentMethods}/Get`
}

const _instance = '@instances';
export const instanceTypes = {
    Get: `${_instance}/Get`,
    Post: `${_instance}/Post`,
    Put: `${_instance}/Put`,
    Delete: `${_instance}/Delete`
}

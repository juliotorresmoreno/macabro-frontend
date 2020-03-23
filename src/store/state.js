
import { UserProfile, BusinessProfile, PaymentMethod } from '../models';

export interface AuthState {
    auth: Boolean,
    profile: UserProfile,
    action: String,
    redirect: String
}


export type CountriesState = [];

export type PaymentMethodState = PaymentMethod[]

export interface DefaultState {
    auth: AuthState,
    countries: CountriesState,
    business: BusinessProfile,
    paymentMethods: PaymentMethodState
}
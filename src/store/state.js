
import { UserProfile, BusinessProfile, PaymentMethod, Instance } from '../models';

export interface AuthState {
    auth: Boolean,
    profile: UserProfile,
    action: string,
    redirect: string
}


export type CountriesState = [];

export type InstanceState = Array<Instance>;

export type PaymentMethodState = PaymentMethod[]

export interface DefaultState {
    auth: AuthState,
    countries: CountriesState,
    business: BusinessProfile,
    instances: InstanceState,
    paymentMethods: PaymentMethodState
}
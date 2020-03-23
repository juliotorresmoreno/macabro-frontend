
import { UserProfile, BusinessProfile } from '../models';

export interface AuthState {
    auth: Boolean,
    profile: UserProfile,
    action: String,
    redirect: String
}


export type CountriesState = [];

export interface DefaultState {
    auth: AuthState,
    countries: CountriesState,
    business: BusinessProfile
}
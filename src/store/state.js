
import { UserProfile } from '../models';

export interface AuthState {
    auth: Boolean,
    profile: UserProfile
}

export interface DefaultState {
    auth: AuthState
}
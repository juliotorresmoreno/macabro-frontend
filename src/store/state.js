
import { UserProfile } from '../models';

export interface AuthState {
    auth: Boolean,
    profile: UserProfile,
    action: String,
    redirect: String
}

export interface DefaultState {
    auth: AuthState
}
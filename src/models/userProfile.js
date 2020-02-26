
// @flow

export interface UserProfile {
    id: Number,
    username: String,
    name: String,
    lastname: String,
    email: String,
    role: 'admin' | 'user',
    token: String
}

export interface UserProfileWithPassword {
    id: Number,
    username: String,
    name: String,
    lastname: String,
    email: String,
    password: String
}

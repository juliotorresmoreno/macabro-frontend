
// @flow

export interface UserProfile {
    id: Number,
    username: String,
    name: String,
    lastname: String,
    email: String,

    document_type: String,
    expedite: String,
    document: String,
    date_birth: String,
    imgSrc: String,
    country: String,
    nationality: String,
    facebook: String,
    linkedin: String,

    role: 'admin' | 'user',
    token: String,
}

export interface UserProfileWithPassword {
    id: Number,
    username: String,
    name: String,
    lastname: String,
    email: String,
    
    document_type: String,
    expedite: String,
    document: String,
    date_birth: String,
    imgSrc: String,
    country: String,
    nationality: String,
    facebook: String,
    linkedin: String,

    password: String
}

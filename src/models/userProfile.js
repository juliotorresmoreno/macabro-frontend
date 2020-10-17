
// @flow

export interface UserProfile {
    id: Number,
    username: string,
    name: string,
    lastname: string,
    email: string,

    document_type: string,
    expedite: string,
    document: string,
    date_birth: string,
    imgSrc: string,
    country: string,
    nationality: string,
    facebook: string,
    linkedin: string,

    role: 'admin' | 'user',
    token: string,
}

export interface UserProfileWithPassword {
    id: Number,
    username: string,
    name: string,
    lastname: string,
    email: string,
    
    document_type: string,
    expedite: string,
    document: string,
    date_birth: string,
    imgSrc: string,
    country: string,
    nationality: string,
    facebook: string,
    linkedin: string,

    password: string
}

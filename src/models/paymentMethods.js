
// @flow

export interface PaymentMethod {
    id: Number,
    name: string,
    number: string,
    alias_number: string,
    type: string,
    default: Number,
    expiration_month: string,
    expiration_year: string,
    cvv: string
}



// @flow

export interface PaymentMethod {
    id: Number,
    name: String,
    number: String,
    alias_number: String,
    type: String,
    default: Number,
    expiration_month: String,
    expiration_year: String,
    cvv: String
}


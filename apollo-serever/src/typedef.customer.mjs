

export const customerTypeDefs = `
    extend type Query {
        customer(id: Int): Customer
        customers: [Customer]
    }

    type Customer {
        id: Int
        name: String
        phone: String
        vehicle: Vehicle
        contacts: [Customer]
    }
`
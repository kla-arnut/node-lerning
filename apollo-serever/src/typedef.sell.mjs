export const sellTypeDefs = `
    extend type Query {
        sell(id: Int): Sell
        sells: [Sell]
    }

    type Sell {
        id: Int
        customer: Customer
        vehicle: Vehicle
    }
`
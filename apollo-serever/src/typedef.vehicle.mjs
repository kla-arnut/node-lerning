export const vehicleTypeDefs = `
    extend type Query {
        vehicle(id: Int): Vehicle
        vehicles: [Vehicle]
    }

    type Vehicle {
        id: Int
        name: String
        color: String
    }
`
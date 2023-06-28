import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone'
import { customerTypeDefs } from './typedef.customer.mjs'
import { vehicleTypeDefs } from "./typedef.vehicle.mjs"
import { sellTypeDefs } from "./typedef.sell.mjs";
import { customerResolvers } from "./resolver.customer.mjs";
import { sellResolvers } from "./resolver.sell.mjs";
import { vehicleResolvers } from './resolver.vehicle.mjs'
import { Customer  } from "./model.customer.mjs";

const typeDefs  = `
    type Query {
        _empty: String
        customer(id: Int): Customer
        customers: [Customer]
        vehicle(id: Int): Vehicle
        vehicles: [Vehicle]
        sell(id: Int): Sell
        sells: [Sell]
    }

    type Mutation {
        createCustomer(name: String!, phone: String, contacts: String): Customer
    }
`
const queryResolvers = {
    Query: {},
    Mutation: {
        createCustomer(parent, args) {
            return Customer.create(args)
        }
    }
}


const server = new ApolloServer({
    typeDefs: [typeDefs, customerTypeDefs, vehicleTypeDefs, sellTypeDefs],
    resolvers: [queryResolvers, customerResolvers, vehicleResolvers, sellResolvers]
})

startStandaloneServer(server,{listen:{port:4000}})
    .then(app => {
        console.log(app)
    })
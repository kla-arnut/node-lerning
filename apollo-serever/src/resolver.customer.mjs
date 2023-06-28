import { Customer } from "./model.customer.mjs"
import { Sell } from "./model.sell.mjs"
import { Vehicle } from "./model.vehicle.mjs"

export const customerResolvers = {
    Query : {
        customer(parent, args) {
            const {id} = args
            return Customer.findByPk(id)
                .then(customer => {
                    return customer
                })

        },

        customers() {
            return Customer.findAll()
                .then(customer => {
                    return customer
                })
        }
    },

    Customer: {
        contacts (parent, args) {
            const contacts =  parent.contracts.split(',')
            
            const promises = contacts.map((each) => {
                return Customer.findByPk(each)
            })

            return Promise.all(promises)
                .then(contacts => {
                    return contacts
                })
        },

        vehicle (parent, args) {
            const {id} = args
            return Sell.findOne({
                where: {
                    customer_id: id
                },
                raw: true
            })
                .then(sell => {
                    return Vehicle.findByPk(sell.vehicle_id)
                })
                .then(vehicle => {
                    return vehicle
                })

        }
    }
}
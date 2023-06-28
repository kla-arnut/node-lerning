import { Customer } from "./model.customer.mjs";
import { faker } from '@faker-js/faker'
import { Vehicle } from "./model.vehicle.mjs";
import { Sell } from "./model.sell.mjs";

Customer.sync({force:true}) 
    .then(() => {
        const customers = new Array(50)
            .fill()
            .map(() => {
                return Customer.create ({
                    name: faker.person.fullName(),
                    phone: faker.phone.number(),
                    contacts: new Array(3).fill().map(() => faker.number.int({min:1,max:50})).join(',')
                })
            })
        
        Promise.all(customers)
            .then(() => {
                console.log('seed success')
            })
    })

Vehicle.sync({force:true})
    .then(() => {
        const vehicle = new Array(50)
            .fill()
            .map(() => {
                return Vehicle.create({
                    name: faker.vehicle.vehicle(),
                    color: faker.vehicle.color()
                })
            })
        
        Promise.all(vehicle)
            .then(() => {
                console.log('seed success')
            })
    })


Sell.sync({force:true})
    .then(() => {
        const sell = new Array(50)
            .fill()
            .map(() => {
                return Sell.create({
                    customer_id: faker.number.int({min:1, max:50}),
                    vehicle_id: faker.number.int({min:1, max:50})
                })
            })
        
        Promise.all(sell)
            .then(() => {
                console.log('seed success')
            })
    })
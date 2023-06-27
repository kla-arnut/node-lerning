import { faker } from "@faker-js/faker/locale/th"
import { customer } from "./model.customer.mjs"

customer.truncate()
    .then(() => {
        const promiss = new Array(50)
            .fill()
            .map(each => {
                return customer.create({
                    name:faker.person.fullName(),
                    address:faker.location.country(),
                    age:faker.number.int({min:20, max:60}),
                    phone:faker.phone.number(),
                    email:faker.internet.email()
                })
            })
        
        Promise.all(promiss)
        .then(() => {
            console.log('success')
        }) 
    })



console.log(customer)

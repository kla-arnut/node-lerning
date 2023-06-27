import { sequelize } from "./sequelize.mjs";
import {STRING, INTEGER} from 'sequelize'

const fieled = {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: INTEGER
    },
    name: STRING,
    address: STRING,
    age: INTEGER,
    phone: STRING,
    email: STRING
}
const options = {
    tableName: 'customers'
    // timestamps: false
}

export const customer =  sequelize.define('customer',fieled,options)

// customer.sync({force:true})
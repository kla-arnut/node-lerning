import { INTEGER,STRING } from "sequelize";
import { sequelize } from "./sequelize.mjs";

const field = {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: INTEGER
    },
    name:STRING,
    phone:STRING,
    contacts: STRING
}

const options = {
    tableName: 'customers'
}

export const Customer = sequelize.define("customers",field,options)
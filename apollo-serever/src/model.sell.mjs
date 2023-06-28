import { sequelize } from "./sequelize.mjs";
import { STRING,INTEGER } from "sequelize";

const field = {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: INTEGER
    },
    customer_id: INTEGER,
    vehicle_id: INTEGER
}

const options = {
    tableName: 'sells',
    timestamps: false
}

export const Sell = sequelize.define('sell',field,options)
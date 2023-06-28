import { INTEGER,STRING } from "sequelize";
import { sequelize } from "./sequelize.mjs";

const fieled = {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: INTEGER
    },
    name: STRING,
    color: STRING
}

const options = {
    tableName: 'vehicles',
    timestamps: false
}

export const Vehicle = sequelize.define('vehicle',fieled,options)
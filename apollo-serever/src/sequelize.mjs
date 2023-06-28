import { INTEGER,STRING, Sequelize } from "sequelize";
import path from 'path'

export const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: path.resolve('src','sqlite.db')
})
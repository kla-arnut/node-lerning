import fs from 'fs'
import path from "path";
import axios from 'axios';

export function getUserFromREST() {
    return new Promise((resolve, reject) =>{
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                resolve(res.data)
            })
    })
}


export function getUsers() {
    const s = path.resolve('src','db.json')

    return new Promise((resolve, reject) => {
        fs.promises.readFile(s, {encoding:'utf8'})
        .then(json => {
            resolve(JSON.parse(json))
        })
        .catch(() => {
            reject()
        })
    })
}
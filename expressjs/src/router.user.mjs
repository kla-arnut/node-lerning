import express from 'express'
import fs from 'fs'
import path from 'path'

const userRouter =  express.Router()

userRouter.get('/', (req, res) => {
    const query = req.query
    const f =  path.resolve('src','users.json')
    fs.promises.readFile(f,{encoding:'utf8'})
        .then(data => {
            const json = JSON.parse(data)
            res.json(json)
        })
})

userRouter.get('/:id', (req, res) => {
    const id =  req.params.id
    const f =  path.resolve('src','users.json')
    fs.promises.readFile(f,{encoding:'utf8'})
        .then(data => {
            const json = JSON.parse(data)
            const findbyid =  filterById(json,id)
            res.json(findbyid)
        })
})

function filterById(jsonObject, id) {return jsonObject.filter(function(jsonObject) {return (jsonObject['id'] == id);})[0];}


userRouter.post('/', (req, res) => {
    res.send('post')
})

userRouter.put('/:id', (req, res) => {
    const id =  req.params.id
    res.send(`put ${id}`)
})

userRouter.delete('/:id', (req, res) => {
    const id =  req.params.id
    res.send(`delete ${id}`)
})

export default userRouter
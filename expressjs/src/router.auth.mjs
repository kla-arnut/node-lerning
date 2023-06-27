import express from 'express'
import jwt from 'jsonwebtoken'
import { SECRET } from './env.mjs'


const router = express.Router()

router.post('/login', (req, res) => {
    const {username, password} = req.body
    console.log(username, password)
    res.json({username, password})

    const token = jwt.sign({username}, SECRET)
    res.json({token})
})

export default router
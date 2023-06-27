import express from 'express'
import { customer } from './model.customer.mjs'

const customerRouter = express.Router()

customerRouter.get('/',(req, res) => {
    const { limit,page } = req.query
    customer.findAll({
        limit: limit,
        offset: page
        // where:{
        //     address: 'UK'
        // }
    }).then(c => {
        res.json(c)
    })
})

customerRouter.post('/',(req, res) => {
    const c  = req.body
    const customer = customer.build(c)
    customer.save(c)
    .then(cus => {
        res.json(cus)
    })
})

customerRouter.get('/:id',(req, res) => {
    const id = req.params
    customer.findByPk(id)
    .then(c => {
        res.json(c)
    })
})

customerRouter.put('/:id',(req, res) => {
    const {id} = req.params
    customer.findByPk(id)
})

customerRouter.delete('/:id',(req, res) => {
    const {id} = req.params
    customer.findByPk(id)
    .then(c => {
        if(!$c){
            res.status(404).end()
        } else {
            c.destroy()
            .then(() => {
                res.json(c)
            })
        }
    })
})

export default customerRouter
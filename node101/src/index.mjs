import http from 'http'
import { handler } from './handler.mjs'
import { EventEmitter } from 'events'


const e  =  new EventEmitter()

e.on('FOO', () => {
    console.log('FOO')
})

const server = http.createServer()
server.on('request',handler)
server.on('request', () => {
    e.emit('FOO')
})
server.listen(4567, () => {
    console.log(server.address())
})
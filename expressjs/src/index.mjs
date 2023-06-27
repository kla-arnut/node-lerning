import { PORT } from "./env.mjs";
import express from 'express'
import userRouter from './router.user.mjs'
import { auth,cores, preflight } from './middleware.mjs'
import customerRouter from "./router.customer.mjs";
import { app, httpServer,io} from './io.mjs'

// import { router } from './router.auth.mjs'

//import { customer } from './model.customer.mjs'
// customer.sync({force:true})


// const app =  express()

app.use(cores)
app.use(preflight)

app.use(express.static('public'))

app.use(express.urlencoded({extended: true}))
app.use(express.json())


app.use('/users', auth, userRouter)

app.use('/customers',customerRouter)

app.get ('/', (req, res) => {
    res.send('hello world')
})

app.use((req, res) => {
    res.status(404).send('404')
})


// const listener =  app.listen(PORT, () => {
//     console.log(listener.address())
// })

httpServer.listen(PORT, () => {
    console.log(httpServer.address())
})



io.on('connect', socket => {
    console.log('connect')

    socket.broadcast.emit('join')
    
    socket.on('greet', context => {
        console.log('greet',context)
        // socket.emit('reply'), {message: 'thanks'}
        socket.broadcast.emit('reply', {message: 'thanks'})
    })

    socket.on('disconnect', socket => {
        //socket.on('greet', () => {
            console.log('disconnect')
        //})
    })
})


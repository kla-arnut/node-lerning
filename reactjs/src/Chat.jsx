import { useEffect,useRef } from "react"
import { getSocket } from "./io"

export function Chat() {
    const socket = useRef(undefined)

    useEffect(() => {
        socket.current = getSocket() 

        socket.current.on('reply', context => {
            console.log(context)
        })

        socket.current.on('join', () =>{
            console.log('someone just joined')
        })

        return () => {
            socket.current.disconnect()
        }
    }, [])

    function handleSend() {
        socket.current.emit('greet',{message: 'hellooooooo'})
    }

    return <>
        <h1>Chat</h1>
        <p>
            <button onClick={handleSend}>send</button>
        </p>
    </>
}
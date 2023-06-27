// import { Express } from "./Express";
import { Chat } from "./Chat";
import { useState } from "react";

export function App() {
    const [show, setShow] = useState(false)
    return <>
        <h1>APP</h1>
        <p>
            <button onClick={() => setShow(!show)}>toggle</button>
        </p>
        <hr></hr>
        { show && <Chat></Chat>}
        {/* <Express></Express> */}
    </>
}
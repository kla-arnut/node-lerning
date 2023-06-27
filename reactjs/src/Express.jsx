import { useState } from 'react'
import axios from 'axios'

export function Express() {
    const [credential, setCredential] = useState({username: '', password: ''})
    const [token, setToken] = useState('')

    function handleChange(e) {
        setCredential({
            ...credential, [e.target.name]: e.target.value
        })
    }

    function handleGet() {
        axios.get('http://localhost:3001/users', {
            headers: {
                'Authorization': 'bearer '+token
            }
        })
        .then(res => {
            console.log(res.data)
        })
    }

    function handleLogin() {
        const credential = {username: 'admin',password: 'password'}
        // axios.post('http://localhost:3001/auths/login')
        // .then(res => {
        //     console.log(res.data)
        // })
        setToken('12345678910')
    }

    function handleLogout () {
        setToken('')
    }

    return <>
        <h1>express</h1>
        {token === '' &&
            <div>
                <pre>
                    {JSON.stringify(credential)}
                </pre>
                <p>
                    <input type="text" name="username" placeholder="username" 
                    onChange={handleChange} value={credential.username}/>
                </p>
                <p>
                    <input type="password" name="password" placeholder="password" 
                    onChange={handleChange} value={credential.password}/>
                </p>
                <p>
                    <button onClick={handleLogin}>Login</button>
                </p>
            </div>
        }
        {token !== '' &&
            <button onClick={handleLogout}>Logout</button>
        }
        <pre>
            {token}
        </pre>
        <p>
            <button onClick={handleGet}>GET</button>
        </p>
    </>
}
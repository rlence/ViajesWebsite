import React, {useState} from 'react';
// import axios from 'axios';

function Login (props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        const body = {email,password};

    //     axios.post('http://localhost:8080/users/auth', body).then(res => {
    //         console.log(res.headers.authorization)
    //         localStorage.setItem('authorization', res.headers.authorization)
    //     }).catch(console.error)
    }


    return (
        <form onSubmit={onSubmit}>
            <input 
                type="email" 
                name="email" 
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            <input 
                type="password"
                name="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
            <input type="submit" value="Enviar"/>


            <button onClick={null}>Historial</button>
        </form>
    )
}

export default Login;
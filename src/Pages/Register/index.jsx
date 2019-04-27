import React, {useState, useEffect} from 'react';
// import axios from 'axios';

import useName from '../../Hooks/useName';

function Register (props) {
    const [username, setName] = useName(''); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        const body = {username, email,password};

    //     // axios.post('http://localhost:8080/users/', body).then(res => {
    //     //    alert('te has registrado')
        }
    


    return (
        <form onSubmit={onSubmit}>
            <input 
                type="text" 
                name="name" 
                id="name"
                onChange={(e) => setName(e.target.value)}
                value={username}
            />
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

export default Register;
import { useState, useEffect } from "react";

function LoginForm(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const esValido = username !== '' && password !== '';
    const handleSubmit = (e) => {
    e.preventDefault();
    }
    
    return(
    
    <form onSubmit={handleSubmit}>
        <label>Nombre del usuario:</label>
        <input type='text' value={username} onChange={(e)=> setUsername(e.target.value)}></input>
        <label>Contraseña:</label>
        <input type='password' value={password} onChange={(e)=> setPassword(e.target.value)}></input>
        <button type='submit' disabled={!esValido}>Iniciar sesión</button>
    </form>
)
};

export default LoginForm;
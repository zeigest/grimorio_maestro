import React, { useState } from "react";

function LoginForm({onLoginSuccess}){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("s");
    const [errorMsg, setErrorMsg] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const esValido = username !== '' && password !== '';

    const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    if (!esValido) return; 

    try {
        setIsSubmitting(true);
        const response = await fetch("http://localhost:4000/api/auth/login",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({username, password}),

        });

        const data = await response.json();
        if (!response.ok){
            setErrorMsg(data.message || "Error al iniciar sesión");
            return;
    }

    if (onLoginSuccess){
        onLoginSuccess(data.user);
    }
} catch (err) {
    console.error("Error al haceer login:",err);
    setErrorMsg("No se pudo conectar con el servidor.");
} finally {
    setIsSubmitting(false);
}
};

    return(
    
    <form onSubmit={handleSubmit}>
        <label>Nombre del usuario:</label>
        <input type='text' value={username} onChange={(e)=> setUsername(e.target.value)}></input>
        <label>Contraseña:</label>
        <input type='password' value={password} onChange={(e)=> setPassword(e.target.value)}></input>
        {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}

        <button type='submit' disabled={!esValido || isSubmitting}>
            {isSubmitting?"Entrando...":"Iniciar sesión"}
            </button>
    </form>
);
}

export default LoginForm;
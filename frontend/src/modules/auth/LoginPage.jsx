import React from 'react';
import LoginForm from '../../shared/components/auth/loginForm';  

function LoginPage({onLoginSuccess}){
    return(
        <main>
        <h1>Grimorio Mestro</h1>
        <h2>Iniciar sesión</h2>
        <LoginForm onLoginSuccess={onLoginSuccess}/>
        </main>       
        
    )
};

export default LoginPage;
import LoginForm from '../../shared/components/auth/loginForm';

useEffect(()=>{
    document.title="Iniciar Sesión | Grimorio Maestro";
},[]);
    

function LoginPage(){
    return(
        <div class="login-conteiner">
            <h1>Inicia sesión para empezar.</h1>
            <LoginForm/>
        </div>
        
        
    )
};

export default LoginPage;
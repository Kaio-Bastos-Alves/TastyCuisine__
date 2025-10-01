import './Login.css'

function Login( ){
    return (
        <div className='page'>
            <h1>Login</h1>
            <div className="inputs">
                <input className='Nome' type="text" placeholder="Seu nome..."/>
                <input className='Senha' type="text" placeholder="Sua senha..."/>
            </div>
            <button className='botao'>Entrar</button>
        </div>
    
)
}


export default Login
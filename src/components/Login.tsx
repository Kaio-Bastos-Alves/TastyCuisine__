import './css/Login.css'

function Login() {
  return (
    <div className="form-container">
      <p className="title">Login</p>
      <form className="form">
        <div className="input-group">
          <label htmlFor="username">Nome</label>
          <input type="text" name="username" id="username" placeholder="" />
        </div>
        <div className="input-group">
          <label htmlFor="password">Senha</label>
          <input type="password" name="password" id="senha" placeholder="" />
          <div className="forgot">
            <a rel="noopener noreferrer" href="#pagina_maneira_recuperar_login">
              Esqueceu a Senha? Clique aqui!
            </a>
          </div>
        </div>
        <a className='sign' onClick={() => {
          const NomeVerdadeiro = localStorage.getItem("nome");
          const SenhaVerdadeira = localStorage.getItem("senha");
          var nomeInput = document.getElementById("username") as HTMLInputElement | null;
          var senhaInput = document.getElementById("senha") as HTMLInputElement | null;

          var nome = nomeInput ? nomeInput.value : "";
          var password = senhaInput ? senhaInput.value : "";
          if (nome.length == 0) {
            alert("Coloque seu nome");
          }
          if (password.length == 0) {
            alert("Coloque sua senha");
          }
          if (nome != NomeVerdadeiro && nome.length != 0) {
            alert("Nome incorreto");
          }
          if (password != SenhaVerdadeira && password.length != 0) {
            alert("Senha incorreta");
          } 
          if (nome == NomeVerdadeiro && password == SenhaVerdadeira) {
            alert("Login realizado com sucesso!");
            const IsLogged = true;
            localStorage.setItem("isLogged", JSON.stringify(IsLogged));
            window.location.href = "/home";
          }
        }}> Login
          </a>


      </form>
      <p className="signup">
        Não tem uma conta?
        <a rel="noopener noreferrer" href="/cadastro" className=""> Cadastre-se</a>
      </p>
    </div>
  )
}

export default Login

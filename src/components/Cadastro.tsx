import './css/Cadastro.css'
 
function Cadastro() {

  return (
    <div className="form-container">
      <p className="title">Cadastro</p>
      <form className="form">

        <div className="input-group">
          <label htmlFor="nome">Nome</label>
          <input type="text" name="nome" id="nome" placeholder="" />
        </div>

        <div className="input-group">
          <label htmlFor="username">Nome de Usuário</label>
          <input type="text" name="username" id="username" placeholder="" />
        </div>
        
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type='email' name="email" id="email" placeholder="" />
        </div>

        <div className="input-group">
          <label htmlFor="Data_Nascimento">Data de Nascimento</label>
          <input type="date" name="Data_Nascimento" id="Data_Nascimento" placeholder="" />
        </div>

        <div className="input-group">
          <label htmlFor="password">Senha</label>
          <input type="password" name="password" id="senha" placeholder="" />
        </div>

        <div className="input-group">
          <label htmlFor="password">Confirmar Senha</label>
          <input type="password" name="password" id="Csenha" placeholder="" />
        </div>



        <a className='sign' onClick={() => {
          var Nome = document.getElementById("nome") as HTMLInputElement | null;
          var Email = document.getElementById("email") as HTMLInputElement | null;
          var Data =  document.getElementById("Data_Nascimento") as HTMLInputElement | null;
          var Usuário = document.getElementById("username") as HTMLInputElement | null;
          var Senha = document.getElementById("senha") as HTMLInputElement | null;
          var cSenha = document.getElementById("Csenha") as HTMLInputElement | null;

          var nome = Nome ? Nome.value : "";
          var email = Email ? Email.value : "";
          var data = Data ? Data.value : "";
          var usuário = Usuário ? Usuário.value : "";
          var password = Senha ? Senha.value : "";
          var cpassword = cSenha ? cSenha.value : "";

          if (nome.length == 0){
            alert("Preencha seu nome");
          }
          if (usuário.length == 0) {
            alert("Preencha seu nome de usuário");
          }
          if (email.length == 0){
            alert("Preencha seu email");
          }
          if (data.length == 0){
            alert("Preencha sua data de nascimento");
          }
          if (password.length < 8) {
            alert("A senha deve ter no mínimo 8 caracteres");
          }
          if (cpassword.length == 0 && password.length >= 8) {
            alert("Confirme sua senha");
          }
          if (password != cpassword && password.length >= 8 && cpassword.length != 0  ) {
            alert("As senhas não coincidem");
          }
          if (password === cpassword && password.length >= 8 && usuário.length > 0 && nome.length > 0 && email.length > 0) {
            alert("Cadastro realizado com sucesso!");
    localStorage.setItem("usuário", usuário)
    localStorage.setItem("nome", nome);
    localStorage.setItem("email", email)
    localStorage.setItem("data", data)
    localStorage.setItem("senha", password);
    const IsLogged = true;
    localStorage.setItem("isLogged", JSON.stringify(IsLogged));
    window.location.href = "/home";
          }
        }}>
          Cadastrar!
        </a>
      </form>




      <p className="signup">
        Já tem uma conta?
        <a rel="noopener noreferrer" href="/login" className=""> Faça login!</a>
      </p>
    </div>
  )
}

export default Cadastro
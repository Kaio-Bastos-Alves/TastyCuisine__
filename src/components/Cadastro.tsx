import './css/Cadastro.css'
 
function Cadastro() {
 

  return (
    <div className="form-container">
      <p className="title">Cadastro</p>
      <form className="form">

        <div className="input-group">
          <label htmlFor="username">Nome</label>
          <input type="text" name="username" id="username" placeholder="" />
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
          var nomeInput = document.getElementById("username") as HTMLInputElement | null;
          var senhaInput = document.getElementById("senha") as HTMLInputElement | null;
          var csenhaInput = document.getElementById("Csenha") as HTMLInputElement | null;
          var nome = nomeInput ? nomeInput.value : "";
          var password = senhaInput ? senhaInput.value : "";
          var cpassword = csenhaInput ? csenhaInput.value : "";
          if (nome.length == 0) {
            alert("Preencha seu nome");
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
          if (password == cpassword && password.length >= 8 && cpassword.length != 0 && nome.length != 0) {
            alert("Cadastro realizado com sucesso!");
            
    localStorage.setItem("nome", nome);
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
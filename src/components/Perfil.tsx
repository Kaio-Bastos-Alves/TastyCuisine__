import Header from "./header"
import './css/Perfil.css'

function Perfil (){
  var Nome  = localStorage.getItem("nome")
  var Email = localStorage.getItem("email")
  var Data = localStorage.getItem("data")
  var Usuario = localStorage.getItem("usuário")
  var Senha = localStorage.getItem("senha")
   return (
<div>
    <Header/>

<>
  <main className="perfil-container">
    <aside className="perfil-card">
      <div className="foto-perfil"></div>
      <h2 id="sidebar-name">{Nome}</h2>
      <p className="email" id="sidebar-email">{Email}</p>
      <div className="progresso">
        <p id="sidebar-progress-text">Progresso do Perfil (75%)</p>
        <div className="barra"><div className="preenchida" id="sidebar-progress-bar"></div></div>
      </div>
      <p>Minhas Dietas Preferidas:</p>
      <div className="tags" id="sidebar-diets">
        <span className="tag verde">Vegana</span>
        <span className="tag verde">Low Carb</span>
      </div>
    </aside>
  
    <section className="conteudo-perfil">
      <div className="abas">
        <button className="aba ativa" data-alvo="info"><i className="fas fa-user"></i> Informações</button>
                <button className="aba" data-alvo="favoritas"><i className="fas fa-heart"></i> Favoritas</button>
        <button className="aba" data-alvo="publicadas"><i className="fas fa-upload"></i> Publicadas</button>
      </div>
  
      <div className="conteudo info ativa" id="info">
        <h3>Informações Pessoais</h3>
        <label>Nome Completo</label>
        <input id="profile-fullname" type="text" value={Nome} />
        <label>Nome de Usuário</label>
        <input id="profile-username" type="text" value={Usuario} />
        <label>Email</label>
        <input id="profile-email" type="email" value={Email} />
        <label>Data de Nascimento</label>
        <input id="profile-dob" type="date" value={Data} />
        <label>Senha</label>
        <input id="profile-password" type="password" value={Senha} placeholder="Defina ou altere sua senha" />
        <label>Restrições Alimentares e Alergias</label>
        <input id="profile-restrictions" type="text" placeholder="Ex.: intolerância à lactose, alergia a amendoim" />
        <label>Dietas Favoritas (separe por vírgulas)</label>
        <input id="profile-diets" type="text" value="Vegana, Low Carb" placeholder="Ex.: Vegana, Low Carb" />
        <label>Tipo de Conta</label>
        <select id="profile-account-type">
          <option value="chefe">Chefe</option>
          <option value="restaurante">Restaurante</option>
          <option value="usuario" selected>Usuário Comum</option>
        </select>
        <button className="btn-roxo" id="btn-salvar-perfil">Salvar Alterações</button>
      </div>
  
  
      <div className="conteudo favoritas" id="favoritas">
      </div>
  
      <div className="conteudo publicadas" id="publicadas">
      </div>
    </section>
  </main>
</>
</div>
    )
}

export default Perfil
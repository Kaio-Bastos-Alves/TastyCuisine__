import Header from "./header"
import './css/Perfil.css'
import React from 'react';

function Perfil (){
    
    return (
<div>
<body>
    <Header/>

<main className="perfil-container">
  <aside className="perfil-card">
    <div className="foto-perfil"></div>
    <h2 id="sidebar-name">Luquinhas Fritadas</h2>
    <p className="email" id="sidebar-email">ayrtonsenna@gmail.com</p>
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
      <input id="profile-fullname" type="text" value="Luquinhas Fritadas" />
      <label>Nome de Usuário</label>
      <input id="profile-username" type="text" value="luquinhasfritadas" />
      <label>Email</label>
      <input id="profile-email" type="email" value="ayrtonsenna@gmail.com" />
      <label>Data de Nascimento</label>
      <input id="profile-dob" type="date" />
      <label>Senha</label>
      <input id="profile-password" type="password" placeholder="Defina ou altere sua senha" />
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

<footer>
  <div className="footer-text">
    <h3>Tasty Cuisine</h3>
    <p>Feito com carinho, saúde e um toque de afeto.</p>
  </div>
  <div className="footer-links">
    <a href="politica.html">Política de Privacidade</a>
    <a href="termosUso.html">Termos de Uso</a>
  </div>
  <div className="footer-social">
    <i className="fab fa-facebook"></i>
    <i className="fab fa-instagram"></i>
  </div>
</footer>
<script src="theme.js"></script>
</body>
</div>
    )
}

export default Perfil
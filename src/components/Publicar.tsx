import './css/Publicar.css'
import Header from './header'
function publicadas (){
    return(
        <>
        <header>
          <Header/>
        </header>
            <main>
                <h1>Publique Sua Receita</h1>
                <p className="subtitulo">Compartilhe suas criações culinárias saudáveis com a comunidade Tasty Cuisine!</p>
            
                <form className="formulario">
                  <label>Nome da Receita</label>
                  <input id="nome" placeholder="Ex: Smoothie de Frutas Vermelhas" />
            
                  <label>Descrição Curta</label>
                  <textarea id="descricao" placeholder="Uma breve descrição da sua receita..."></textarea>
            
                  <label >Ingredientes (um por linha)</label>
                  <textarea id="ingredientes" placeholder="1 xícara de aveia&#10;2 bananas maduras&#10;..."></textarea>
            
                  <label>Instruções de Preparo</label>
                  <textarea id="preparo" placeholder="Passo 1: Misture todos os ingredientes...&#10;Passo 2: Leve ao forno por X minutos..."></textarea>
            
                  <label>Categoria</label>
                  <select id="categoria">
            <option>Selecione uma categoria</option>
            <option>Café da Manhã</option>
            <option>Almoço</option>
            <option>Lanche</option>
            <option>Jantar</option>
            <option>Vegano</option>
            <option>Fitness</option>
                  </select>
            
                  <label>Imagem da Receita (Opcional)</label>
                  <input type="file" id="imagem" />
            
                  <button type="submit">Publicar Receita</button>
                </form>
              </main>
        </>
    )
}

export default publicadas
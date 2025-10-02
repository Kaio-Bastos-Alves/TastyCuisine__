import './css/Home.css'
import Header from './header'
    
function Home (){
    return (
  <div className='full-page'>
        <header>
          <Header />
        </header>

  
      <div className='Page'>
        <h1>Comida de verdade,</h1>
        <h2>Sabor de Sobra</h2>
        <h3>Receitas deliciosas criadas com amor e diversão!</h3>
        <div className="buttons">
        
            <button onClick={(alert("Pagina em desenvolvimento"))}>Ver Receitas</button>
            <button>Ver Restaurantes</button>
          
          
        </div>
      </div>
      
  </div>

    )
}

export default Home
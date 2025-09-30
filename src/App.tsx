import './App.css'
import Receitas from './components/Receitas'
import Perfil from './components/Perfil'

function App () {

  return (
      <div className='head'>
            <h1 className='Title'>Tasty Cuisine</h1>

            <div className='header-options'>
              <nav>
                <ul>
                <li className='options'><a className='item' href=''>Home</a></li>
                <li className='options'><a className='item'  href=''>Receitas</a></li>
                <li className='options'><a className='item'  href=''>Perfil</a></li>
                </ul>
              </nav>
            </div>



      <div className='Receitas'>
        <Receitas/>
      </div>
      <div className='Perfil'>
        <Perfil/>
      </div>

    </div>
  )
}

export default App

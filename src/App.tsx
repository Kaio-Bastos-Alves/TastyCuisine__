import './App.css'
import Login from './components/Login'

function App () {
  

  return (
    <div>
      <header className='head'>
            <div className='logo'>
              <h1 className='Title'>Tasty Cuisine</h1>
            </div>
            <nav className='nav-bar'>
              <ul>
                <li className='options'><a  className='item'  href=''>Home</a></li>
                <li className='options'><a className='item'  href=''>Receitas</a></li>
                <li className='options'><a className='item'  href=''>Restaurantes</a></li>
                <li className='options'><a className='item'  href=''>Perfil</a></li>
                </ul>
            </nav>
        </header> 

        <Login/>
      </div>
        
      
        
       
    
  )
}

export default App

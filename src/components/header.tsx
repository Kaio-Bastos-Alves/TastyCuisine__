import { useEffect, useState } from "react";
import "./css/header.css";

function Header() {
  const [isLogged, setIsLogged] = useState(false);
  useEffect(() => {
    const isLogged = localStorage.getItem("isLogged");
    
    setIsLogged(isLogged === "true");
  }, []);
  

  return (
    <header>
      <div className="logo">
        <h1 className="Title">Tasty Cuisine</h1>
      </div>
      <nav className="nav-bar">
        <ul>
          <li className="options"><a className="item" onClick={
            () => {
              if (isLogged) {
                window.location.href = "/home";
              } else {
                alert("Você precisa estar logado para acessar a Home");
                window.location.href = "/login";
              }
            }

            
          }>Home</a></li>
          <li className="options"><a className="item" href="/receitas">Receitas</a></li>
          <li className="options"><a className="item" href="/restaurantes">Restaurantes</a></li>
          <li className="options"><a className="item" href="/perfil">Perfil</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

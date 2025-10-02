import { useEffect, useState } from "react";
import "./css/header.css";

function Header() {
  const [isLogged, setIsLogged] = useState(false);
  useEffect(() => {
    const isLogged = localStorage.getItem("isLogged");
    setIsLogged(isLogged === "true");
  }, []);
  
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header className={`head ${showHeader ? "visible" : "hidden"}`}>
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
          <li className="options"><a className="item" href="">Receitas</a></li>
          <li className="options"><a className="item" href="">Restaurantes</a></li>
          <li className="options"><a className="item" href="/login">Perfil</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

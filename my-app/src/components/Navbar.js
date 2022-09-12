import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import IconNavBars from './svg/IconNavBars';
import IconWecode from './svg/IconWecode';
import IconLupa from './svg/IconLupa';
import IconCarrinhoDeCompras from './svg/IconCarrinhoDeCompras';
import BackgroundPerfilImage from './svg/BackgroundPerfilImage';
import IconSair from './svg/IconSair';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="menu-icon" onClick={handleClick}>
            <IconNavBars className={click ? 'fa-times' : 'fa-bars'} />
          </div>
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <IconWecode />
          </Link>
          <div className="lupa-icon">
            <IconLupa />
          </div>
          <div className="carrinho-icon">
            <IconCarrinhoDeCompras />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item-perfil">
              <BackgroundPerfilImage className="background-perfil-image" />
              <div className="perfil-text-container">
                <div className="cumprimento-text">Olá,</div>
                <div className="usar-name">Usuário</div>
              </div>
            </li>
            <li className="nav-item li-um">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Departamento 1
              </Link>
            </li>
            <li className="nav-item li-dois">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Departamento 2
              </Link>
            </li>
            <li className="nav-item li-tres">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Departamento 3
              </Link>
            </li>
            <li className="nav-item li-quatro">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Departamento 4
              </Link>
            </li>
            <li className="nav-item li-cinco">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Departamento 5
              </Link>
            </li>
            <li className="nav-item li-seis">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Departamento 6
              </Link>
            </li>
            <li className="nav-item li-sete">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Sair
                <IconSair className="icon-sair" />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

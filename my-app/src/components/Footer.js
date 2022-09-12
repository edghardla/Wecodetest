import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import IconWecode from './svg/IconWecode';
import { Button } from './Button';
import IconLetter from './svg/IconLetter';

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <div className="footer-logo-container">
          <IconWecode className="footer-logo" />
        </div>
        <p className="footer-subscription-heading">Newsletter</p>
        <p className="footer-subscription-text">
          Receba nossas novidades e ofertas através da nossa newsletter
        </p>
        <div className="input-areas">
          <form>
            <div className="div-imput">
              <input
                className="footer-input"
                name="email"
                type="email"
                placeholder="Digite seu e-mail"
              />
            </div>
            <div className="div-button-input">
              <Button buttonStyle="btn--newsletter">
                <IconLetter />
              </Button>
            </div>
          </form>
        </div>
      </section>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-social-heading">Siga nossas redes sociais</div>
          <div className="social-icons">
            <Link
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter" />
            </Link>
            <Link
              className="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </Link>
          </div>
        </div>
      </section>
      <section className="certificados-section">
        <div className="certificados-container">
          <div className="titulo-certificados">Certificados & Selos</div>
          <div className="imagens-certificados">
            <img className="selos" src="images/Selo01.png" />
            <img className="selos" src="images/Selo02.png" />
            <img className="selos" src="images/Selo03.png" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;

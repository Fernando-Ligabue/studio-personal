import React from "react";
import "../../styles/footer.css";
import logo from "../../assets/img/dumble.png";

const Footer = () => {

    const year = new Date().getFullYear();

  return (
    <footer className="footer" data-aos="fade-up" data-aos-duration="1500">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__box">
            <div className="logo">
              <div className="logo__img">
                <img src={logo} alt="Logo Studio" />
              </div>
              <h2>
                Studio<span className="highlights">Personal</span>
              </h2>
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
              obcaecati similique incidunt temporibus sed quam .
            </p>
          </div>
          <div className="footer__box">
            <h4 className="footer__title">StudioPersonal</h4>

            <ul className="footer__links">
              <li>
                <a href="http://localhost:3000" rel="noopener noreferrer">Início</a>
              </li>
              <li>
                <a href="http://localhost:3000" rel="noopener noreferrer">Serviços</a>
              </li>
              <li>
                <a href="http://localhost:3000" rel="noopener noreferrer">Valores</a>
              </li>
              <li>
                <a href="http://localhost:3000" rel="noopener noreferrer">Reviews</a>
              </li>
            </ul>
          </div>

          <div className="footer__box">
            <h4 className="footer__title">Políticas</h4>

            <ul className="footer__links">
              <li>
                <a href="http://localhost:3000" rel="noopener noreferrer">Termos e condições</a>
              </li>
              <li>
                <a href="http://localhost:3000" rel="noopener noreferrer">Privacidade</a>
              </li>
              <li>
                <a href="http://localhost:3000" rel="noopener noreferrer">Cookies</a>
              </li>
            </ul>
          </div>

          <div className="footer__box">
            <h4 className="footer__title">Links úteis</h4>

            <ul className="footer__links">
              <li>
                <a href="http://localhost:3000" rel="noopener noreferrer">Contacte-nos</a>
              </li>
              <li>
                <a href="http://localhost:3000" rel="noopener noreferrer">Suporte</a>
              </li>
              <li>
                <a href="http://localhost:3000" rel="noopener noreferrer">Localização</a>
              </li>
            </ul>
          </div>
        </div>
        <p className="copyright">Copyright - {year} Developed by FD Web - All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

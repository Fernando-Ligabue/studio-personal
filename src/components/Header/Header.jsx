import React, { useRef, useEffect } from "react";
import "./header.css";
import logo from "../../assets/img/dumble.png";

const nav__links = [
  {
    id: 1,
    path: "#home",
    display: "Início",
  },
  {
    id: 2,
    path: "#services",
    display: "Modalidades",
  },
  {
    id: 3,
    path: "#start",
    display: "Começar",
  },
  {
    id: 4,
    path: "#pricing",
    display: "Valores",
  },
  {
    id: 5,
    path: "#testimonials",
    display: "Reviews",
  },
];

const Header = () => {

  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const headerFunc = () => {
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
      headerRef.current.classList.add('sticky__header');
    } else {
      headerRef.current.classList.remove('sticky__header');
    }
  }

  useEffect(() =>{
    window.addEventListener('scroll', headerFunc);

    return () => window.removeEventListener('scroll', headerFunc);
  }, []);

  const handleClick = e =>{
    e.preventDefault();

    const targetAttr = e.target.getAttribute('href');
    const location = document.querySelector(targetAttr).offsetTop;

    window.scrollTo({
      left: 0,
      top: location - 80,
    });
  };

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  return (
    <header className="header" ref={headerRef}>
      <div className="container">
        <div className="nav__wrapper">
          {/*===== LOGO ======*/}
          <div className="logo">
            <div className="logo__img">
              <img src={logo} alt="Logo Studio" />
            </div>
            <h2>Studio<span className="highlights">Personal</span></h2>
          </div>
          {/* =====navigation menu===== */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu">
              {nav__links.map((item) => (
                <li className="nav__item" key={item.id}>
                  <a onClick={handleClick} href={item.path}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>
          {/* ========nav right========= */}
          <div className="nav__right">
            <button className="register__btn">Contacte-nos</button>
            <span className="mobile__menu" onClick={toggleMenu}>
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

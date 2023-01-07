import React from "react";
import "../../styles/hero.css";
import heroImg from "../../assets/img/gym-02.png";
import dumbleIcon from "../../assets/img/dumble.png";

const Hero = () => {
  return (
    <section id="home">
      <div className="container">
        <div className="hero__wrapper">
          {/* =====hero content ===== */}
          <div className="hero__content">
            <h2 className="section__title" data-aos="fade-up" data-aos-duration="1500">
              O exercício é a chave para um{" "}
              <span className="highlights">Estilo de Vida Saudável!</span>
            </h2>
            <p data-aos="fade-up" data-aos-delay="100" data-aos-duration="1800">
              Precisar de um treinamento individualizado? <br /> Venha conhecer
              nossos serviçoes e profissionais altamente qualificados.
            </p>
            <div className="hero__btns" data-aos="fade-up" data-aos-delay="200" data-aos-duration="2000">
              <button className="btn__know">Começar</button>
              <button className="watch__btn">
                <span>
                  <i className="ri-play-fill"></i>
                </span>
                Conheça nosso espaço
              </button>
            </div>
          </div>
          {/* =====hero img ===== */}
          <div className="hero__img">
            <div className="hero__img-wrapper">
              <div className="box-01">
                <div className="box-02">
                  <div className="box-03">
                    <div className="box__img">
                      <img src={heroImg} alt="Training" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="heart__rate" data-aos="fade-right">
                <h5>Heart Rate</h5>
                <span>
                  <i className="ri-heart-pulse-fill"></i>
                </span>
                <h6>2567 BPM</h6>
              </div>

              <div className="gym__location" data-aos="fade-left">
                <span>
                  <i className="ri-map-pin-2-fill"></i>
                </span>
                <h5>
                  O melhor local <br /> para treinar!
                </h5>
              </div>

              <div className="dumble__icon" data-aos="fade-down">
                <img src={dumbleIcon} alt="Dumble" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

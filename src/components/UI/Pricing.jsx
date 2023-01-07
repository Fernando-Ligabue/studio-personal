import React from 'react';
import '../../styles/pricing.css';

const Pricing = () => {
  return (
    <section id="pricing">
        <div className="container">
            <div className="pricing__top">
                <h2 className="section__title">
                    Studio<span className="highlights">Personal</span> | Valores
                </h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, fuga neque. <br/> Consequatur temporibus at, ullam a adipisci atque hic ratione.</p>
            </div>
            {/* pricing wrapper */}
            <div className="pricing__wrapper">
                <div className="pricing__item" data-aos="fade-up" data-aos-duration="1500">
                    <div className="pricing__card-top">
                        <h2 className="section__title">Membro Premium</h2>
                        <h2 className="section__title pricing">R$750 <span>/mês</span></h2>
                    </div>

                    <div className="services">
                        <ul>
                            <li><span><i className="ri-checkbox-blank-circle-fill"></i></span>Acesso ilimitado</li>
                            <li><span><i className="ri-checkbox-blank-circle-fill"></i></span>Personal Trainer</li>
                            <li><span><i className="ri-checkbox-blank-circle-fill"></i></span>Avaliações morfológicas</li>
                            <li><span><i className="ri-checkbox-blank-circle-fill"></i></span>Nutricionista</li>
                        </ul>

                        <button className="register__btn">Junte-se a nós!</button>
                    </div>
                </div>
                <div className="pricing__item pricing__item-02" data-aos="fade-up" data-aos-duration="1500">
                    <div className="pricing__card-top">
                        <h2 className="section__title">Membro Regular</h2>
                        <h2 className="section__title pricing">R$550 <span>/mês</span></h2>
                    </div>

                    <div className="services">
                        <ul>
                            <li><span><i className="ri-checkbox-blank-circle-fill"></i></span>Acesso 5 dias/semana</li>
                            <li><span><i className="ri-checkbox-blank-circle-fill"></i></span>Personal Trainer</li>
                            <li><span><i className="ri-checkbox-blank-circle-fill"></i></span>Avaliações morfológicas</li>
                            <li><span><i className="ri-checkbox-blank-circle-fill"></i></span>Nutricionista</li>
                        </ul>

                        <button className="register__btn">Junte-se a nós!</button>
                    </div>
                </div>
                <div className="pricing__item" data-aos="fade-up" data-aos-duration="1500">
                    <div className="pricing__card-top">
                        <h2 className="section__title">Membro Standard</h2>
                        <h2 className="section__title pricing">R$350 <span>/mês</span></h2>
                    </div>

                    <div className="services">
                        <ul>
                            <li><span><i className="ri-checkbox-blank-circle-fill"></i></span>Acesso 3 dias/semana</li>
                            <li><span><i className="ri-checkbox-blank-circle-fill"></i></span>Aulas em grupos de 3</li>
                            <li><span><i className="ri-checkbox-blank-circle-fill"></i></span>1 Avaliação morfológicas</li>
                            <li><span><i className="ri-checkbox-blank-circle-fill"></i></span>1 Sessão Nutricionista</li>
                        </ul>

                        <button className="register__btn">Junte-se a nós!</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Pricing;
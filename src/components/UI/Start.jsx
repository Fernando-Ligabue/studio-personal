import React from 'react';
import '../../styles/start.css';
import trainerImg from '../../assets/img/trainer.png';

const Start = () => {
  return (
    <section id="start">
        <div className="container">
            <div className="start__wrapper">
                <div className="start__img" data-aos="zoom-in" data-aos-duration="1800">
                    <img src={trainerImg} alt="Trainer"/>
                </div>

                <div className="start__content" data-aos="zoom-in" data-aos-duration="1800">
                    <h2 className="section__title">
                        <span className="highlights">Pronto</span> para começar?
                    </h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum sit aliquam modi ex sapiente iste, deleniti reiciendis numquam quo eligendi unde ratione animi quibusdam consequuntur?</p>

                    <button className="register__btn">Vamos a isto!!</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Start;
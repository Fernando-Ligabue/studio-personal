import React from 'react';
import '../../styles/exercises.css';
import lunges from '../../assets/img/lunges.png';
import yoga from '../../assets/img/yoga-pose.png';
import extended from '../../assets/img/extended.png';

const exerciseList = [
    {
        imgUrl: lunges,
        title: 'Qualidade de Vida',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
        imgUrl: yoga,
        title: 'Flexibilidade',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
        imgUrl: extended,
        title: 'Melhor disposição',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
];

const Exercises = () => {    
  return (
    <section id="services">
        <div className="container exxercise__container">
            <div className="exercise__top">
                <h2 className="section__title">
                    <span className="highlights">Benefícios dos </span>Exercícios
                </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptates,<br/>
                 commodi officia porro, ducimus laudantium eum soluta dolorum!</p>
            </div>
            {/* Lista de exercícios */}
            <div className="exercise__wrapper">
               { exerciseList.map((item, index) => (
                <div key={item.imgUrl} className="exercise__item" data-aos="zoom-in" data-aos-duration="1500">
                <span className="exercise__icon">
                    <img src={item.imgUrl} alt="Exercícios" />
                </span>
                <div className="exercise__content">
                    <h4>{item.title}</h4>
                    <p>{item.content}</p>
                </div>
            </div>
               ))}
            </div>
        </div>
    </section>
  )
}

export default Exercises;
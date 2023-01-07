import React from "react";
import "../../styles/testimonials.css";
import avatar01 from '../../assets/img/avatar01.png';
import avatar02 from '../../assets/img/avatar02.png';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
// import required modules
import { EffectCards } from "swiper";

export default function Testimonials() {
  return (
    <>
      <section id="testimonials">
        <div className="container sliders">
            <h2 className="section__title">Review dos nossos clientes</h2>
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            <SwiperSlide>
                <div className="slide__item">
                    <div className="slide__img-01">
                        <img src={avatar01} alt="Member 01" />
                    </div>
                    <h4>Member Review</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos autem tempora explicabo earum ipsam inventore?</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="slide__item">
                    <div className="slide__img-02">
                        <img src={avatar02} alt="Member 02" />
                    </div>
                    <h4>Member Review</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos autem tempora explicabo earum ipsam inventore?</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="slide__item">
                    <div className="slide__img-03">
                        <img src={avatar01} alt="Member 03" />
                    </div>
                    <h4>Member Review</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos autem tempora explicabo earum ipsam inventore?</p>
                </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";

import background1 from "../assets/background1.png";
import background2 from "../assets/background2.jpg";
import background3 from "../assets/background3.jpeg";

import { Autoplay } from "swiper/modules";

function Hero() {
    return (
        <section className="section__hero">
            <div className="container">
                <div className="hero__content">
                    <div className="hero__text flex flex-col space-y-4 lg:space-y-6">
                        <h1 className="font-light">
                            Експертиза проектів будівництва швидко: швидко, прозоро, ефективно
                        </h1>
                        <a href="#section__form" type="button" className="btn">Отримати консультацію</a>
                    </div>
                </div>
            </div>
            <div className="background__slider">
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    loop={true}>

                    <SwiperSlide>
                        <img src={background1}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={background2}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={background3}/>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="background_overlay absolute top-0 left-0 w-full h-full bg-black opacity-50 z-[1]"></div>
        </section>
    );
}

export default Hero;
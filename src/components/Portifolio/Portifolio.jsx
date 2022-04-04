import React from "react";
import "./Portifolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../assets/img-crianca.jpg";
import img2 from "../../assets/img-pessoal.jpg";
import img3 from "../../assets/img-lembranca.jpg";
import img4 from "../../assets/img-noivos.jpg";
import "swiper/css";
import { FreeMode, Pagination, Navigation } from "swiper";

const Portifolio = () => {
  return (
    <div className="portifolio" id="Portifolio">
      <header>
        <h1>Conheça o meu</h1>
        <h2>Portifólio</h2>
        <p>Gostou e quer ver mais? Visite também as minhas redes sociais.</p>
      </header>
      <div>
        <Swiper
          modules={[Pagination, Navigation]}
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          breakpoints={{
            // when window width is >= 480px
            0: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            600: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            }
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={img1} />
          </SwiperSlide>

          <SwiperSlide>
            <img src={img2} />
          </SwiperSlide>

          <SwiperSlide>
            <img src={img3} />
          </SwiperSlide>

          <SwiperSlide>
            <img src={img4} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Portifolio;

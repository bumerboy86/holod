import "../styles/components/service-slide.scss";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const ServiceSlide = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide>
        <article className='service-slide'>
          <span className='service-slide__title'>
            Лучшие специалисты по ремонту и диагностики
          </span>
          <section className='service-slide__numeration'>
            <div className='service-slide__circle'></div>
            <p className='service-slide__num'>1</p>
          </section>
        </article>
      </SwiperSlide>
      <SwiperSlide>
        <article className='service-slide'>
          <span className='service-slide__title'>
          Гарантия качества 100%
          </span>
          <section className='service-slide__numeration'>
            <div className='service-slide__circle'></div>
            <p className='service-slide__num'>2</p>
          </section>
        </article>
      </SwiperSlide>
      <SwiperSlide>
        <article className='service-slide'>
          <span className='service-slide__title'>
          Ремонт любой сложности
          </span>
          <section className='service-slide__numeration'>
            <div className='service-slide__circle'></div>
            <p className='service-slide__num'>3</p>
          </section>
        </article>
      </SwiperSlide>
      <SwiperSlide>
        <article className='service-slide'>
          <span className='service-slide__title'>
          Работаем без выходных
          </span>
          <section className='service-slide__numeration'>
            <div className='service-slide__circle'></div>
            <p className='service-slide__num'>4</p>
          </section>
        </article>
      </SwiperSlide>
    </Swiper>
  );
};

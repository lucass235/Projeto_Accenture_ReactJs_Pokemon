import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Pagination, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import GrassPokemon from '../../../../assets/pokemons-3.png';
import FirePokemon from '../../../../assets/pokemon-trainer.png';

export default function Carousel() {

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Swiper
        modules={[Pagination, Scrollbar, Autoplay]}
        slidesPerView={1}
        spaceBetween={600}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination
        scrollbar
        style={{ height: '400px', width: '100%' }}
      >
        <SwiperSlide style={{ width: '100%'}}>
          <img src={GrassPokemon} alt="Slide - promoção de pokemons" />
        </SwiperSlide>
        <SwiperSlide style={{ width: '100%'}}>
          <img src={FirePokemon} alt="slide - seja um treinador pokemon" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
};
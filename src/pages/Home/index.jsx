import React from "react";
import { api } from "../../config/api";
import ProductCarousel from "../../components/ProductCarousel";
import * as S from "./styles";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Home() {
  return (
    <S.Container>
      <S.Content>
        <Swiper
          grabCursor={true}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="carousel"
        >
          <SwiperSlide>
            <img
              src="https://d2r00w08fz6ft0.cloudfront.net/groover-demo/images/main-slider/2.a289c10d30d58800c033d18144706456.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://chekromul.github.io/uikit-ecommerce-template/images/promo/ipad.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://chekromul.github.io/uikit-ecommerce-template/images/promo/macbook-new.jpg" alt="" />
          </SwiperSlide>
        </Swiper>
        <S.SectionProduct>
          <h2>Mobiliário </h2>
          <ProductCarousel />
        </S.SectionProduct>

        <S.SectionProduct>
          <h2>Vestuário</h2>
          <ProductCarousel />
        </S.SectionProduct>

        <S.SectionProduct>
          <h2>Eletrônicos</h2>
          <ProductCarousel />
        </S.SectionProduct>

        <S.SectionProduct>
          <h2>Serviços</h2>
          <ProductCarousel />
        </S.SectionProduct>
      </S.Content>
    </S.Container>
  );
}

export default Home;

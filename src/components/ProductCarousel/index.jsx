import React from "react";
import * as S from "./styles";
import { products } from "./mockProduct";
import { ShoppingCartSimple } from "phosphor-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

function ProductCarousel() {
  console.log(products);
  return (
    <S.Content>
      <Swiper
        spaceBetween={30}
        slidesPerView={5}
        grabCursor={true}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="carousel"
      >
        {products.map((p) => (
          <SwiperSlide>
            <S.Card>
              <S.CardImg></S.CardImg>
              <S.CardInfo>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
              </S.CardInfo>
              <S.CardFooter>
                <span>{p.price}</span>
                <div>
                  <ShoppingCartSimple size={25} color="#000000" />
                </div>
              </S.CardFooter>
            </S.Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </S.Content>
  );
}

export default ProductCarousel;

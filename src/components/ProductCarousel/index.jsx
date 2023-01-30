import React from "react";
import * as S from "./styles";
import { ClipLoader } from "react-spinners";
import { ShoppingCartSimple } from "phosphor-react";
import { useFormatter } from "../../hooks";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

function ProductCarousel({ products }) {
  if (products === null) {
    return (
      <S.ContainerLoading>
        <ClipLoader color="#ff8906" size={200} />
      </S.ContainerLoading>
    );
  }

  return (
    <S.Content>
      <S.FilterList>
        <li>
          Mais recentes
          <div></div>
        </li>
        <li>
          Mais vendido
          <div></div>
        </li>
        <li>
          Em destaque
          <div></div>
        </li>
      </S.FilterList>
      <Swiper
        spaceBetween={10}
        slidesPerView={4}
        grabCursor={true}
        navigation={true}
        modules={[Navigation]}
        className="carousel"
      >
        {products.map((p, i) => (
          <SwiperSlide key={i}>
            <S.Card>
              <S.CardImg>
                <img src={p.image} alt="" />
              </S.CardImg>
              <S.CardInfo>
                <h3>{p.name}</h3>
                <p>{p.description}</p>
              </S.CardInfo>
              <S.CardFooter>
                <span>{useFormatter.format(p.price)}</span>
                <div>
                  <ShoppingCartSimple size={25} color="#000000" />
                </div>
              </S.CardFooter>
            </S.Card>
          </SwiperSlide>
        ))}
      </Swiper>
      <p>Ver mais dessa categoria</p>
    </S.Content>
  );
}

export default ProductCarousel;

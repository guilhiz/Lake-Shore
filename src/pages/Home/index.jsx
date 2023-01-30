import React from "react";
import { useProducts } from "./hooks";
import { useAos } from "../../hooks";
import ProductCarousel from "../../components/ProductCarousel";
import * as S from "./styles";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Home() {
  const { furniture, electronics, clothes, services } = useProducts();
  useAos()

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
            <S.FeaturedCard color="#ff8906">
              <img
                src="https://d2r00w08fz6ft0.cloudfront.net/groover-demo/images/main-slider/2.a289c10d30d58800c033d18144706456.jpg"
                alt="imagem ilustrativa"
              />
              <h3 data-aos="fade-right">Tudo para o verão </h3>
              <p data-aos="fade-left">aproveite a estação mais quente do ano</p>
            </S.FeaturedCard>
          </SwiperSlide>
          <SwiperSlide>
            <S.FeaturedCard color="#0E4CB3">
              <img
                src="https://chekromul.github.io/uikit-ecommerce-template/images/promo/ipad.jpg"
                alt="imagem ilustrativa"
              />
              <h3>Ofertas imperdiveis</h3>
              <p>#shoping</p>
            </S.FeaturedCard>
          </SwiperSlide>
          <SwiperSlide>
            <S.FeaturedCard color="#FC4505">
              <img
                src="https://chekromul.github.io/uikit-ecommerce-template/images/promo/macbook-new.jpg"
                alt="imagem ilustrativa"
              />
              <h3>Especial Eletro</h3>
              <p>para quem ama inovar</p>
            </S.FeaturedCard>
          </SwiperSlide>
        </Swiper>

        <S.SectionProduct>
          <h2 >Mobília </h2>
          <ProductCarousel products={furniture} />
        </S.SectionProduct>

        <S.SectionProduct>
          <h2>Vestuário</h2>
          <ProductCarousel products={clothes} />
        </S.SectionProduct>

        <S.SectionProduct>
          <h2>Eletrônicos</h2>
          <ProductCarousel products={electronics} />
        </S.SectionProduct>

        <S.SectionProduct>
          <h2>Serviços</h2>
          <ProductCarousel products={services} />
        </S.SectionProduct>
      </S.Content>
    </S.Container>
  );
}

export default Home;

import React from "react";
import * as S from "./styles";
import { ClipLoader } from "react-spinners";
import { ShoppingCartSimple } from "phosphor-react";
import { useFormatter } from "../../hooks";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { useProducts } from "../../pages/Home/hooks";
import { api } from "../../config/api";
import { useNavigate } from "react-router-dom";

function ProductCarousel({ products }) {
  const { cart, setCart } = useProducts();
  const navigate = useNavigate()

  function addProductCart(product) {
    addProduct(product._id)
  }

  const addProduct = async (product_id) => {
    try {
      const token = localStorage.getItem("token-access")
      const config = { headers: { Authorization: `Bearer ${token}` } };
      const response = await api.post('/addItemCart', {cart_id: cart ? cart._id : null, product_id}, config)
      console.log(response);
      setCart(response.data)
    } catch (error) {
      if (error.status === 401) navigate('/sign-in')
      console.log(error);
    }
  }

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
        spaceBetween={30}
        slidesPerView={5}
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
                  <ShoppingCartSimple onClick={() => addProductCart(p)} size={25} color="#000000" />
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

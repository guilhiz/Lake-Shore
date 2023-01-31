import { useEffect, useState, useContext } from "react";

import { useNavigate } from "react-router-dom";
import { api } from "../../config/api";
import { ClipLoader } from "react-spinners";
import { useFormatter } from "../../hooks";
import * as S from "./styles";

function Cart() {
  const [products, setProducts] = useState(null);
  const [sumProducts, setSumProducts] = useState(0);
  const [cart_id, setCart_id] = useState(null);
  const navigate = useNavigate();

  const getProducts = async () => {
    const token = localStorage.getItem("token-access");
    const config = { headers: { Authorization: `Bearer ${token}` } };
    if (!token) navigate("/sign-in");
    try {
      const response = await api.get("/cart/products", config);
      const data = response.data;
      setProducts(data.products);
      setSumProducts(data.sumProducts);
      setCart_id(data.cart_id);
    } catch (error) {
      console.log(error);
      if (error.status === 401) console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  if (products === null) {
    return (
      <S.ContainerLoading>
        <ClipLoader color="#ff8906" size={200} />
      </S.ContainerLoading>
    );
  }

  const handleClick = () => {
    navigate("/checkout", {
      state: { cart_id },
    });
  };

  return (
    <S.Container>
      <S.Card>
        <S.Title>Carrinho de compras</S.Title>
        <S.ContainerProducts>
          {products.length < 1 && <p>Primeiro adicione um item ao carrinho para vê-lo aqui</p>}
          {products &&
            products.map((item, index) => {
              return (
                <div key={index}>
                  <S.ProductCard>
                    <S.ImageProduct src={item.product.image} alt="" />
                    <S.LabelCard>
                      <S.TitleProduct>{item.product.name}</S.TitleProduct>
                      <S.SubTitleProduct>{item.product.description}</S.SubTitleProduct>
                    </S.LabelCard>
                    <S.PriceProduct>{useFormatter.format(item.product.price)}</S.PriceProduct>
                    <S.ShowQuantity>{item.quantity > 1 && `${item.quantity}x`}</S.ShowQuantity>
                  </S.ProductCard>
                </div>
              );
            })}
        </S.ContainerProducts>
      </S.Card>
      <S.ContainerButton>
        <p>
          Total ({products?.length} {products?.length > 1 ? "itens" : "item"}): {useFormatter.format(sumProducts)}
        </p>
        <S.CheckoutButton disabled={products.length < 1} onClick={handleClick}>
          Fechar pedido
        </S.CheckoutButton>
      </S.ContainerButton>
    </S.Container>
  );
}

export default Cart;

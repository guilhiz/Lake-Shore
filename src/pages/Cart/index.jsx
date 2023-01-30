import { useEffect, useState } from "react";
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

  useEffect(() => {
    getProducts();
  }, []);

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

  const finalizingCart = async () => {
    const token = localStorage.getItem("token-access");
    const config = { headers: { Authorization: `Bearer ${token}` } };
    try {
      const res = await api.post("/closeShoppingCart", { cart_id }, config);
      console.log(res);
      navigate("/checkout");
    } catch (err) {
      if (err.status === 401) navigate("/sign-in");
      console.log(err);
    }
  };

  if (products === null) {
    return (
      <S.ContainerLoading>
        <ClipLoader color="#ff8906" size={200} />
      </S.ContainerLoading>
    );
  }

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
        <S.checkoutButton onClick={finalizingCart}>Fechar pedido</S.checkoutButton>
      </S.ContainerButton>
    </S.Container>
  );
}

export default Cart;

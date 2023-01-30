import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../config/api";
import { useProducts } from "../Home/hooks";
import * as S from "./styles"

function Cart() {
    const [products, setProducts] = useState([])
    const [sumProducts, setSumProducts] = useState(0)
    const [cart_id, setCart_id] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = async () => {
        const token = localStorage.getItem("token-access");
        const config = { headers: { Authorization: `Bearer ${token}` } };
        if (!token) navigate('/sign-in')
        try {
            const response = await api.get('/cart/products', config)
            const data = response.data
            console.log(data);
            setProducts(data.products)
            setSumProducts(data.sumProducts)
            setCart_id(data.cart_id)
        } catch (error) {
            console.log(error);
            if (error.status === 401)
                console.log(error);
        }
    }

    return (
        <S.Container>
            <S.Card>
                <S.Title>Carrinho de compras</S.Title>
                <S.ContainerProducts>
                    {products.map((item, index) => {
                        return <div key={index}>
                            <S.ProductCard>
                                <S.ImageProduct src={item.product.image} alt="" />
                                <S.LabelCard>
                                    <S.TitleProduct>{item.product.name}</S.TitleProduct>
                                    <S.SubTitleProduct>{item.product.description}</S.SubTitleProduct>
                                </S.LabelCard>
                                <S.PriceProduct>{`R$ ${item.product.price}`}</S.PriceProduct>
                            </S.ProductCard>
                            <S.Line></S.Line>
                        </div>
                    })}
                </S.ContainerProducts>
            </S.Card>
            <S.CheckoutButton onClick={() => navigate("/checkout")}> Finalizar compra</S.CheckoutButton>

        </S.Container>
    )
}

export default Cart
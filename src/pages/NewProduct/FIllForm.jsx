 import { useState } from 'react';
 import * as S from './styles';
 import { api } from '../../config/api';
 import { useNavigate } from 'react-router-dom';


 export default function FillForm({ category }) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const navigate = useNavigate();

   async function register(event) {
        event.preventDefault();
        const token = localStorage.getItem("token-access")
        const config = { headers: { Authorization: `Bearer ${token}` } };

        try {
            await api.post("/new-product", { name, image, description, price, category }, config);
            alert("Produto cadastrado com sucesso");
            navigate("/");
        } catch (error) {
            console.log(error);
            alert(error.message);
        }
    }
    return (
        <S.ContainerForm>
            <S.Title>Conte um pouco mais sobre o seu produto</S.Title>
            <S.FormStyled onSubmit={register}>
                <input type="text" placeholder="Nome" value={name} onChange={(event) => (setName(event.target.value))} required />
                <input type="url" placeholder="Endereço da imagem" value={image} onChange={(event) => (setImage(event.target.value))} required />
                <input type="text" placeholder="Dê uma descrição" value={description} onChange={(event) => (setDescription(event.target.value))} required />
                <input type="text" placeholder="Agora, dê seu preço" value={price} onChange={(event) => (setPrice(event.target.value))} required />
                <button type="submit">Cadastrar anúncio</button>
            </S.FormStyled>
        </S.ContainerForm>
    )
}
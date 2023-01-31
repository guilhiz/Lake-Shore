import * as S from "./styles";
import React, { useContext } from "react";
import { AuthContext } from "../../contexts/auth/AuthContext";
import { useState } from "react";
import { api } from "../../config/api";
import { useNavigate, useLocation } from "react-router-dom";

export default function Checkout() {
  const { setQuantityProducts } = useContext(AuthContext);
  const [nameCard, setNameCard] = useState("");
  const [cpf, setCpf] = useState("");
  const [digit, setDigit] = useState("");
  const [valid, setValid] = useState("");
  const [secCode, setSecCode] = useState("");
  const location = useLocation();
  const { cart_id } = location.state;
  const navigate = useNavigate();

  async function finishCheckout(event) {
    event.preventDefault();
    const token = localStorage.getItem("token-access");
    const config = { headers: { Authorization: `Bearer ${token}` } };
    try {
      await api.post("/closeShoppingCart", { cart_id }, config);
      await api.post("/checkoutfinal", { nameCard, cpf, digit, valid, secCode }, config);
      setQuantityProducts(0);
      alert("Compra efetuada com sucesso");
      navigate("/");
    } catch (error) {
      alert("Não foi possível efetuar a sua compra");
    }
  }

  return (
    <S.Container>
      <S.Content>
        <S.Title>Informe os dados para pagamento</S.Title>
        <S.InputsBox onSubmit={finishCheckout}>
          <input
            type="text"
            placeholder="Nome impresso no cartão"
            value={nameCard}
            onChange={(event) => setNameCard(event.target.value)}
            required
          />
          <input type="text" placeholder="CPF" value={cpf} onChange={(event) => setCpf(event.target.value)} required />
          <input
            type="text"
            placeholder="Dígitos do cartão"
            value={digit}
            onChange={(event) => setDigit(event.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Validade"
            value={valid}
            onChange={(event) => setValid(event.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Código de segurança"
            value={secCode}
            onChange={(event) => setSecCode(event.target.value)}
            required
          />
          <S.Button>Confirmar</S.Button>
        </S.InputsBox>
      </S.Content>
    </S.Container>
  );
}

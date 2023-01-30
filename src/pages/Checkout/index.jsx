import * as S from "./styles"

export default function Checkout(){
    return(
        <S.Container>
            <S.Title>Informe os dados para pagamento</S.Title>
            <S.InputsBox>
                <input type="text" placeholder="Nome impresso no cartão"/>
                <input type="number" placeholder="CPF"/>
                <input type="number" placeholder="Dígitos do cartão"/>
                <input type="text" placeholder="Validade"/>
                <input type="number" placeholder="Código de segurança"/>
            </S.InputsBox>
        </S.Container>
    )
}
import styled from "styled-components";

export const Container = styled.div`
    background: #d4d8f0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
`
export const Card = styled.div`
    width: 80vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    background: #FFFFFF;
    border-radius: 8px;
`
export const Title = styled.p`
    width: 95%;
    height: 50px;
    display: flex;
    justify-content: start;
    align-items: center;
    text-align: left;
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 20px;
    line-height: 20px;
`
export const ContainerProducts = styled.div`
    width: 95%;
    margin-top: 10px;
`

export const ProductCard = styled.div`
    width: 100%;
    height: 180px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const ImageProduct = styled.img`
    height: 80%;
    width: 15%;
`
export const LabelCard = styled.div`
    width: 60%;
    margin-left: 20px;
`
export const TitleProduct = styled.p`
    width: 100%;
    height: 40px;
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 20px;
    line-height: 20px;
`
export const SubTitleProduct = styled.p`
    width: 100%;
    height: 40px;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
`
export const PriceProduct = styled.p`
    width: 10%;
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 20px;
    line-height: 20px;
`
export const Line = styled.div`
    width: 100%;
    height: 1px;
    background: black;
`
export const CheckoutButton = styled.button`
    background-color: #060e38;
    width: 250px;
    height: 40px;
    border-radius: 8px;
    color: #ffffff;
    font-weight: 700;
    margin-top: 20px;
`
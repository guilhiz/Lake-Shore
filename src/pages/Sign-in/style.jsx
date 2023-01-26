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
    width: 460px;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #FFFFFF;
    border-radius: 8px;
`
export const Input = styled.input`
    width: 400px;
    height: 50px;
    background: #FFFFFF;
    border-radius: 8px;
    border: 1px solid #A9ACC0;
    padding: 0.5rem;
    font-family: "Roboto";
    font-weight: 400;
    font-size: 17px;
    line-height: 15px;
    margin-bottom: 10px;
    &::placeholder{
        font-family: "Roboto";
        font-weight: 400;
        font-size: 17px;
        line-height: 15px;
        padding: 0.5rem;
    }
`
export const ButtonSubmit = styled.button`
    width: 400px;
    height: 50px;
    background: #d4d8f0;
    border-radius: 8px;
    border: 1px solid #A9ACC0;
    font-family: "Roboto";
    font-weight: 700;
    font-size: 17px;
    line-height: 15px;
    margin-bottom: 10px;
    cursor: pointer;
`
export const Form = styled.form`
    width: 400px;
`
export const Cadastro = styled.p`
    width: 400px;
    display: flex;
    text-align: center;
    justify-content: center;
    font-family: "Roboto";
    font-weight: 700;
    font-size: 15px;
    line-height: 15px;
    color: #43444C;
    margin-top: 14px;
    cursor: pointer;
`
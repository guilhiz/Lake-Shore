import styled from "styled-components";

export const Container = styled.div`
height: 100vh;
background: linear-gradient(#b8c1ec 50%, #e7ebfc  50%);
display: flex;
flex-direction: column;
`
export const Title = styled.div`
    margin-top: 200px;
    margin-left: 100px;
    font-size: 30px;
    font-family: "Roboto";
    color: #232946;
`
export const BoxItens = styled.div`
    display: flex;
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    width: 65%;
    justify-content: space-between;
`
export const Box = styled.div`
    width: 150px;
    height: 150px;
    background-color: #fffffe ;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p{
        margin-top: 20px;
    }
`
export const FormStyled = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 70%;
  margin-left: auto;
  margin-right: auto;
  input{
    margin-bottom: 18px;
    height: 50px;
    border-radius: 4px;
    border-color: #979ec5;
    ::placeholder{
        font-family: "Roboto";
        font-weight: 400;
        font-size: 17px;
        line-height: 15px;
        padding: 0.5rem;
    }
  }
  button{
    width: 50%;
    height: 15%;
    margin-left: auto;
    margin-right: auto;
    background-color: #232946;
    color: #FFFFFF;
    font-size: 20px;
  }
`
import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  background: #b8c1ec;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
`;
export const Title = styled.p`
  font-size: 30px;
  font-weight: 700;
  letter-spacing: 0.05em;
  font-family: "Roboto";
  color: #232946;
  text-align: center;
`;
export const BoxItens = styled.div`
  display: flex;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  width: 65%;
  justify-content: space-between;
`;
export const Box = styled.div`
  width: 150px;
  height: 150px;
  background-color: #fffffe;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 300ms ease-in;
  p {
    margin-top: 20px;
  }
  :hover {
    background-color: #ffcaa6;
  }
`;

export const ContainerForm = styled.div`
  background-color: #ffffff;
  height: 430px;
  width: 430px;
  border-radius: 10px;
  padding: 15px;
  margin: 0px auto;
`;

export const FormStyled = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80%;
  input {
    margin-bottom: 18px;
    height: 50px;
    background: #ffffff;
    border-radius: 8px;
    border: 1px solid #a9acc0;
    padding: 8px;
    ::placeholder {
      font-family: "Roboto";
      font-weight: 400;
      font-size: 17px;
      line-height: 15px;
    }
  }
  button {
    width: 80%;
    height: 15%;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid #a9acc0;
    border-radius: 5px;
    background-color: #d4d8f0;
    font-size: 1.3em;
    cursor: pointer;
    :hover {
      opacity: 0.8;
    }
    :active {
      scale: 0.9;
    }
  }
`;

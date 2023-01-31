import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #d4d8f0;
  height: 100vh;
  font-family: "Roboto", sans-serif;
`;

export const Content = styled.div`
  background-color: #ffffff;
  height: 430px;
  width: 430px;
  border-radius: 10px;
  padding: 15px;
`;

export const Title = styled.p`
  font-size: 23px;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: #010101;

  width: 100%;
  text-align: center;
  margin-top: 10px;
`;
export const Button = styled.button`
  width: 300px;
  height: 40px;
  border: 1px solid #a9acc0;
  border-radius: 5px;
  background-color: #d4d8f0;
  margin-top: 20px;
  font-size: 1.3em;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
  :active {
    scale: 0.9;
  }
`;
export const InputsBox = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;

  input {
    height: 40px;
    width: 300px;
    padding: 5px;
    margin-top: 10px;
    background: #FFFFFF;
    border-radius: 8px;
    border: 1px solid #A9ACC0;
  }
`;

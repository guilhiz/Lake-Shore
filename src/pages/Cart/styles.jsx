import styled from "styled-components";

export const Container = styled.div`
  background: #d4d8f0;
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  padding: 80px 0px 80px;
`;
export const Card = styled.div`
  width: 55vw;
  display: flex;
  flex-direction: column;
  background-color: red;
  justify-content: start;
  background: #d4d8f0;
  border-radius: 8px;
`;
export const Title = styled.p`
  width: 95%;
  height: 50px;
  display: flex;
  justify-content: start;
  align-items: center;
  text-align: left;
  font-family: "Roboto";
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
`;
export const ContainerProducts = styled.div`
  width: 100%;
  margin-top: 10px;
  overflow: auto;
  > p {
    font-size: 1.5em;
    font-weight: 700;
  }
`;

export const ProductCard = styled.div`
  width: 100%;
  height: 180px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  padding: 0px 22px;
  background-color: #fff;
  border: 1px solid #acacac;
  position: relative;
`;
export const ImageProduct = styled.img`
  height: 80%;
  width: 15%;
`;
export const LabelCard = styled.div`
  width: 60%;
  margin-left: 20px;
`;
export const TitleProduct = styled.p`
  width: 100%;
  height: 40px;
  font-family: "Roboto";
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
`;
export const SubTitleProduct = styled.p`
  width: 100%;
  height: 40px;
  font-family: "Roboto";
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
`;
export const PriceProduct = styled.p`
  width: 10%;
  font-family: "Roboto";
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  margin-left: 18px;
`;

export const ContainerButton = styled.div`
  width: 30%;
  height: 150px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border: 1px solid #acacac;
  margin-left: 22px;
  position: sticky;
  top: 23%;
  left: 60%;
  padding: 30px;
  > p {
    font-size: 1.3em;
    width: 100%;
  }
`;
export const CheckoutButton = styled.button`
  width: 100%;
  height: 40px;
  border: none;
  border: 1px solid #c26f11;
  border-radius: 5px;
  background-color: #ff8906;
  margin: 20px auto 0px;
  cursor: pointer;
  font-size: 1.3em;
  :hover {
    opacity: 0.6;
  }
  :active {
    scale: 0.9;
  }
  :disabled {
    :hover {
      opacity: 1;
    }
    :active {
      scale: 1;
    }
  }
`;

export const ShowQuantity = styled.div`
  position: absolute;
  right: 7%;
  top: 35%;
  font-weight: 700;
`;

export const ContainerLoading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  min-width: 100vw;
`;

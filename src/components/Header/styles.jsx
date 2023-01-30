import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 60px;
  padding: 0px 80px;
  background-color: #ffffff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  font-family: "Roboto", sans-serif;
`;

export const Content = styled.div`
  height: 100%;
  max-width: 1366px;
  margin: 0px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    font-family: "Playball";
    font-style: normal;
    font-weight: 700;
    font-size: 55px;
    line-height: 48px;
    color: #333333;
    text-shadow: 0px 4px 2px rgba(255, 255, 255, 0.4);
  }
`;

export const IconsGroup = styled.div`
  display: flex;
  gap: 0px 30px;
  svg {
    cursor: pointer;
    :hover {
      opacity: 0.6;
    }
  }
  a {
    position: relative;
  }
`;

export const CartItemCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background-color: #ff8906;
  border-radius: 50%;
  color: #fff;

  position: absolute;
  z-index: 12;
  top: -5px;
  right: -16px;
`;

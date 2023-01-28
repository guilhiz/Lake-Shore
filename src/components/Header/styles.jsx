import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 80px;
  padding: 17px 80px;
  background-color: #232946;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  font-family: "Roboto", sans-serif;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    font-family: "Playball";
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 48px;
    color: #fffffe;
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
`;

import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 80px;
  padding: 17px 80px;
  background-color: #232946;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    font-size: 38px;
    line-height: 40px;
    letter-spacing: 0.05em;
    color: #fffffe;
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

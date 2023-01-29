import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100%;
  background-color: #d4d8f0;
  margin-top: 80px;
  font-family: "Roboto", sans-serif;
    font-weight: 400;
`;

export const Content = styled.div`
  .carousel {
    width: 100%;
    height: 80vh;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
`;

export const SectionProduct = styled.section`
  width: 100%;
  height: 85vh;
  h2 {
    font-weight: 700;
    font-size: 32px;
    line-height: 34px;
    letter-spacing: 0.05em;
    color: #010101;
    text-align: center;
    margin: 58px 0px 22px;
  }
`;

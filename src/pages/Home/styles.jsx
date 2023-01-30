import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  max-width: 1366px;
  height: 100%;
  margin: 0 auto;
  background-color: #d4d8f0;
  margin-top: 60px;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
`;

export const Content = styled.div`
  >.carousel {
    width: 100%;
    height: 85vh;
    max-height: 528px;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export const SectionProduct = styled.section`
  width: 100%;
  height: 90vh;
  max-height: 559px;
  > h2 {
    font-weight: 700;
    font-size: 32px;
    line-height: 34px;
    letter-spacing: 0.05em;
    color: #010101;
    text-align: center;
    margin: 58px 0px 22px;
  }
`;

export const FeaturedCard = styled.div`
  position: relative;
  height: 100%;

  > h3 {
    position: absolute;
    font-weight: 700;
    top: 40%;
    left: 42%;
    color: ${(props) => props.color};
    font-size: 75px;
    text-shadow: 0px 0px 5px black;
  }
  > p {
    position: absolute;
    top: 55%;
    left: 46%;
    color: #ffffff;
    font-size: 25px;
    text-shadow: 0px 0px 5px black;
  }
`;

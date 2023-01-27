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

  > p {
    font-size: 20px;
    line-height: 22px;
    color: #94a0e6;
    text-align: center;
    cursor: pointer;
    margin-top: 10px;
    :hover {
      color: #232946;
    }
  }
`;

export const FilterList = styled.ul`
  width: 400px;
  display: flex;
  justify-content: space-between;
  margin: 0px auto;

  color: #94a0e6;
  > li {
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;

    div {
      background-color: #ff8906;
      width: 0%;
      height: 3px;
      transition: all ease-in 0.3s;
    }
    :hover {
      color: #ff8906;
      div {
        width: 100%;
      }
    }
  }
  li:nth-child(1) {
    color: #ff8906;
    > div {
      width: 100%;
    }
  }
`;

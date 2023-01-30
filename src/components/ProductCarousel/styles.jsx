import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: 100%;
  background-color: #d4d8f0;
  .carousel {
    width: 100%;
    max-height: 450px;

    padding: 35px 50px;
  }

  > p {
    font-size: 20px;
    line-height: 22px;
    color: #94a0e6;
    text-align: center;
    cursor: pointer;
    margin-top: 40px;
    :hover {
      color: #232946;
    }
  }
`;

export const Card = styled.div`
  width: 260px;
  height: 380px;
  padding: 0.8em;
  background: #ffffff;
  position: relative;
  overflow: visible;
  border-radius: 0.5rem;
  cursor: pointer;
  box-shadow: 4px 4px 8px 0px rgba(180, 180, 207, 0.75);
  :hover {
    scale: 1.05;
  }
`;

export const CardImg = styled.div`
  background-color: #ffcaa6;
  height: 220px;
  width: 230px;
  border-radius: 0.5rem;
`;

export const CardInfo = styled.div`
  padding-top: 2%;
  > h3 {
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 1.5em;
    line-height: 1.5;
    letter-spacing: 0.02em;
    color: #232946;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  > p {
    min-height: 44px;
    max-height: 44px;
    font-family: "Roboto", sans-serif;
    font-weight: 400px;
    font-size: 0.9em;
    padding-bottom: 10px;
    color: #232946;
    overflow: hidden;
    overflow-wrap: break-word;
    text-overflow: ellipsis;
  }
`;

export const CardFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  border-top: 2px solid #ddd;
  > span {
    color: #232946;
    font-size: 1.5em;
  }
  > div {
    border: 1px solid #252525;
    display: flex;
    padding: 0.3em;
    cursor: pointer;
    border-radius: 50px;
    transition: 0.3s ease-in-out;
    :hover {
      border: 1px solid #ffcaa6;
      background-color: #ffcaa6;
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

export const ContainerLoading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  min-width: 100%;
`;

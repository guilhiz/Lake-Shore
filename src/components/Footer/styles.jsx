import styled from "styled-components";

export const Container = styled.div`
  height: 260px;
  width: 100%;
  background-color: #222222;
  padding: 40px 80px;
  margin-top: 150px;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  color: #b8c1ec7a;
  h2 {
    color: #b8c1ec;
    font-size: 1.6em;
  }
  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 180px;
    font-size: 1em;
  }
  > ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  li {
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
    font-size: 0.9em;
    :hover {
      color: #b8c1ec;
    }
  }
`;

export const IconsGroup = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  gap: 5px;
  svg {
    cursor: pointer;
    :hover {
      opacity: 0.6;
    }
  }
`;

export const Input = styled.input`
  height: 40px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
 padding-left: 7px;
  color: #b8c1ec;
  ::placeholder {
    color: #b8c1ec7a;
  }
  :focus {
    outline: none;
  }
`;

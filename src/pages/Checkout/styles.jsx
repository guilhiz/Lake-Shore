import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    align-items: center;
`
export const Title = styled.div`
font-size: 20px;
color: #FFFFFF;
background-color: #16162e;
border-radius: 5px;
width: 400px;
height: 40px;
display: flex;
justify-content: center;
align-items: center;
`
export const InputsBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input{
        height: 40px;
        width: 300px;
        padding: 5px;
        margin-top: 15px;
        border-radius: 8px;
        border-color: #6caae4;
        border-style: solid;
    }
`
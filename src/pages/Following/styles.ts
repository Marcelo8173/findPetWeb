import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    h1{
        margin: 45px 35px;
        color: #454545;
        font-weight: 700;
    }
`;

export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 5px 60px;
    /* align-items: center;
    justify-content: center;
    padding: 10px; */
    div{
        display: flex;
        align-items: center;
        border: 1px solid black;
        border-radius: 5px;
        background: #FFFF;
        padding: 25px;
        img{
            max-width: 100px;
            height: auto;
            border-radius: 5px;
        }
    }

`;
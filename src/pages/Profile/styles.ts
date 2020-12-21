import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh; 
`;

export const Background = styled.div`
    border: 1px solid transparent;
    max-width: 100vw;
    margin: 0 50px;
    max-height: 400px;
    overflow: hidden;
    img{
        width: 100%;
        height: 100%;
        background-size: cover;
    }
`;

export const HeaderProfile = styled.div`
    position: relative;
    top: -50px;
    display: flex;
    margin-left: 150px;
    align-items: center;
    img{
        width: 250px;
        height: auto;
        border: 6px solid #FFFF;
        border-radius: 50%;
        margin-right: 35px;
    }
    div{
        h1{
            font-family: 'Roboto Slab';
            color: #575757;
        }
        p{
            font-family: 'Roboto Slab';
            color: #575757;
            font-size: 18px;
        }
    }
`;
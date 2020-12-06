import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
`;

export const Content = styled.div`
    column-count: 3;
    column-gap: 20px;
`;

export const Card = styled.section`
    cursor: pointer;
    &:hover{
        filter: brightness(50%);
    }
    figure{
        margin: 0;
        display: flex;
        margin-bottom: 20px;
        break-inside: avoid;
        img{
            width: 100%;
            border-radius: 5px;
        }
       
    }
`;
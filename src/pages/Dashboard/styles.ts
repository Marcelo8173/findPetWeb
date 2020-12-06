import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    main{
        margin: 0 30px;
    }
`;

export const Content = styled.div`
    column-count: 3;
    column-gap: 20px;
`;

export const Card = styled.div`
    cursor: pointer;
    position: relative;
    
    figure{
        margin: 0;
        display: flex;
        margin-bottom: 20px;
        break-inside: avoid;
        section{
            position: absolute;
            width: 100%;
            .options{
                display: flex;
                justify-content: space-between; 
            }
        }
        img{
            width: 100%;
            border-radius: 5px;
        }
       
    }
`;
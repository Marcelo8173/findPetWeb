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
    margin: 5px;
    div{
        display: flex;
        align-items: center;
        border: 2px solid #808080;
        border-radius: 5px;
        background: #FFFF;
        padding: 25px;
        /* max-width: 50%; */
        img{
            max-width: 100px;
            height: auto;
            border-radius: 5px;
            margin-right: 20px;
        }
        p{
            margin-right: 20px;
        }
        section{
            button{
                padding: 10px;
                border: 1px solid transparent;
                background: #ffcc50;
                color: #4D4D4D;
                font-family: 'Roboto Slab';
                /* font-size: 18px; */
                font-weight: 500;
                border-radius: 5px;
            }
            .contact{
                margin-right: 20px;
                /* background: #D6302B; */
            }
        }
    }

`;
import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
    height: 100vh;
    h1{
        margin: 45px 35px;
        color: #454545;
        font-weight: 700;
    }
`;


export const ContentContainer = styled.section`
    display: flex;
    justify-content: space-between;
    margin: 0 35px;
    img{
        max-width: 800px;
        border-radius: 10px;
    }
    aside{
        margin-left: 45px;
        h2{
            color: #5E5E5E;
            margin-bottom: 25px;
            font-weight: 700;
        }
        p{
            color: #6E6E6E;
            font-size: 18px;
            margin-bottom: 25px;
        }
        
        .buttons{
            display: flex;
            justify-content: center;
            button{
                margin-right: 25px;
                padding: 15px;
                border-radius: 5px;
                border: 1px solid transparent;
                background: ${lighten(0.1,"#FFBD1D")};
                color: #4D4D4D;
                font-weight: 500;   
            }
        }
    }
`;
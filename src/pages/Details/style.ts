import styled, { keyframes } from 'styled-components';
import { lighten, shade } from 'polished';

const appearFromLeft = keyframes`
    from{
        opacity: 0;
        transform: translateX(-50px);
    }
    to{
        opacity: 1;
        transform: translateX(0px);
    }
`;

export const Container = styled.div`
    height: 100vh;
        h1{
            margin: 45px 35px;
            color: #454545;
            font-weight: 700;
            animation: ${appearFromLeft} 0.5s;
        }
    
`;


export const ContentContainer = styled.section`
    display: flex;
    justify-content: space-between;
    margin: 0 35px;
    animation: ${appearFromLeft} 0.5s;
    img{
        max-width: 800px;
        height: auto;
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
                display: flex;
                margin-right: 25px;
                padding: 15px;
                border-radius: 5px;
                border: 1px solid transparent;
                background: ${lighten(0.1,"#FFBD1D")};
                color: #4D4D4D;
                font-weight: 500;
                justify-content: center;
                transition: all 0.2s;
                &:hover{
                    background: ${shade(0.03,"#FFBD1D")};
                }
                svg{
                    margin-right: 8px;
                }
            }
        }
    }
`;

export const SkiilsContainer = styled.div`
    margin-bottom: 25px;
    display: grid;
    grid-template-columns: auto auto;
    span{
        margin-bottom: 5px;
        color: #6E6E6E;
        font-family: 'Roboto Slab';
        svg{
            margin-right: 5px;
        }
    }
`;

export const ComentsContainer = styled.div`
    margin: 25px 35px;
    border: 1px solid #919191;
    width: 600px;
    padding: 12px;
    border-radius: 5px;
    animation: ${appearFromLeft} 0.5s;

    div{
        display: flex; 
        align-items: center;
        svg{
            margin-right: 10px;
            color: #6E6E6E;
        }
        input{
            border: 1px solid transparent;
            width: 600px;
            color: #6E6E6E;
        }
    }
`;

export const ComentsContain = styled.div`
    border: 1px solid transparent;
    margin-bottom: 70px;
    animation: ${appearFromLeft} 0.5s;

    section{
        display: flex;
        align-items: center;
        margin: 30px 35px;
        padding-bottom: 10px;
        padding-left: 40px;
        border-bottom: 3px solid #919191;
        img{
            width: 50px;
            height: 50px;
            border-radius: 50%;
            margin-right: 10px;
        }
        p{
            color: #6E6E6E;
            font-weight: 520;
        }
    }
`;
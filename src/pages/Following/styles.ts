import styled from 'styled-components';
import { lighten } from 'polished';

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
    margin: 5px 0 20px 0;
    div{
        display: flex;
        align-items: center;
        border: 3px solid #A1A1A1;
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
            color: #4D4D4D;
            font-family: 'Roboto Slab';
            span{
                font-weight: 700;
            }
        }
        section{
            button{
                padding: 10px;
                border: 2px solid #B9E0EB;
                background: transparent;
                color: #4D4D4D;
                font-family: 'Roboto Slab';
                font-size: 14px;
                font-weight: 500;
                border-radius: 5px;
                transition: all 0.3s;
            }
            .contact{
                margin-right: 20px;
                &:hover{
                    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(185,224,235,1) 0%, rgba(0,212,255,0.804359243697479) 58%);
                }
            }
            .remove{
                border: 2px solid #FF3434;
                &:hover{
                    background: ${lighten(0.2, "#FF3434")};
                    border: 2px solid transparent;
                }
            }
        }
    }

`;
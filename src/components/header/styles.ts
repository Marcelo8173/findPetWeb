import styled from 'styled-components';
import {shade} from 'polished';

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 40px;

    .logo-container{
        display: flex;
        align-items: center;
        img{
            margin-right: 60px;
        }
        button{
            background:  #B9E0EB;
            color: #757575;
            font-family: 'Roboto Slab';
            font-size: 18px;
            font-weight: 500;
            margin-right: 15px;
            padding: 10px;
            border: 1px solid transparent;   
            border-radius: 10px;
            transition: all 0.2s;

            &:hover{
                background: ${shade(0.1,'#B9E0EB')};
            }
        }
    }
    .bell{
        margin-right: 10px;
        transition: all 0.2s;
        &:hover{
            opacity: 0.5;
        }

        a{
            display: flex;
            align-items:center;
            text-decoration: none;
            font-family: 'Roboto Slab';
            color: #757575;
            svg{
                margin-left: 10px;
            }
        }
    }
    
`;
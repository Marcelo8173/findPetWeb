import styled from 'styled-components';
import {shade} from 'polished';

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 35px;

    .logo-container{
        display: flex;
        align-items: center;
        img{
            margin-right: 40px;
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
        display: flex;
        margin-right: 10px;
        margin-left: 10px;
        a{
            display: flex;
            align-items:center;
            text-decoration: none;
            font-family: 'Roboto Slab';
            color: #757575;
            margin-left: 25px;
            svg{
                margin-left: 10px;
            }
        transition: all 0.2s;
        &:hover{
            opacity: 0.5;
        }

        }
    }
    
`;
import styled, {keyframes} from 'styled-components';
import Dog from '../../assets/gettyimages-1041987488.jpg';
import { shade } from 'polished';
import { ITabs } from './index';

interface IButtons {
    select: ITabs;
}

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;

`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 750px;
`;

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

export const AnimationContainer = styled.div<IButtons>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 70%;
    animation: ${appearFromLeft} 1s;

    .button-container{
        display: flex;
        width: 50%;
        margin-bottom: 20px;
        button{
            background: #B9E0EB;
            background: ${props => props.select.id === 2 ? shade(0.1,'#B9E0EB') : '#B9E0EB'};
            color: #757575;
            border-radius: 10px 0 0 10px;
            & + button{
                border-radius: 0 10px 10px 0;
                background: ${props => props.select.id === 1 ? shade(0.1,'#B9E0EB') : '#B9E0EB'};
            }
            &:hover{
                 background: ${shade(0.1,'#B9E0EB')};
            }
        }
    }

        h1{
            margin: 24px 0;
            font-family: 'Roboto Slab';
            color: #575757;
        }   

        h2{
            font-family: 'Roboto Slab';
            color: #575757;
        }

        p{
            margin: 23px 0;
            font-family: 'Roboto Slab';
            color: #575757;
        }

        input{
            padding: 6px;
            margin-bottom: 14px;
            width: 100%;
            border: 2px solid #878787;
            border-radius: 5px;
            font-family: 'Roboto Slab';
            color: #525252;
        }

        button{
            background: #ff9000;
            height: 56px;
            border-radius: 10px;
            border: 0;
            padding: 0 16px;
            color: #312e38;
            width: 100%;
            font-weight: 500;
            transition: background 0.2s;

           &:hover{
             background: ${shade(0.2,'#ff9000')};
           }
        }

        a{
            color: #F4EDE8;
            display: block;
            margin-top: 24px;
            text-decoration: none;
            transition: color 0.2s;

            &:hover{
            color: ${shade(0.2, '#F4EDE8')};
        }

    
}
> a{
    color: #ff9000;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;
    display: flex;
    align-items: center;
    &:hover{
            color: ${shade(0.2, '#ff9000')};
        }
    svg{
        margin-right: 16px;
    }

}
`;

export const Background = styled.div`
    flex: 1;
    background: url(${Dog}), no-repeat;
    background-size: cover;
    filter: brightness(77%);
`;
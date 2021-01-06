import styled, {css} from 'styled-components';

interface ContainerProps{
    isFoucosed: boolean;
    isField: boolean;
}

export const Container = styled.div<ContainerProps>`
        background: #FFFF;
        max-width: 600px;
        border-radius: 5px;
        border: 2px solid #9C9C9C;
        padding: 16px;
        width: 100%;
        display: flex;
        align-items: center;
        color: #9C9C9C;

        & + div{
            margin-top: 7px;
        }

    ${props => props.isFoucosed && css`
        color: rgb(255, 189, 29);
        border-color: rgb(255, 189, 29);
    `};

    ${props => props.isField && css`
        color: #ff9000;
    `}
    
    

     input{
            background: transparent;
            flex:1;
            border: 0;
            color: #9C9C9C;



            &::placeholder{
                color: #9C9C9C;
            }

        }
        svg{
            margin-right: 16px;
        }
`;

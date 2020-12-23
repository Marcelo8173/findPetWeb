import styled from 'styled-components';

interface IModalProps{
    openModal: boolean;
}

export const Container = styled.div<IModalProps>`
    display: ${props => props.openModal === true ? 'initial': 'none'};
    padding: 0;
    margin: 0;
    top: 0;
    position:absolute;
    z-index: 10000;
    width: 100%;
    height: 100%;
    background: rgb(0,0,0,0.5);
`;

export const Content = styled.div`
    background: #FFFF;
    position: relative;
    border-radius: 15px;
    margin: 0 450px;
    top: 50%;
    display: flex;
    flex-direction: column;
    button{
        align-self: flex-end;
        margin: 10px 25px;
    }
`;
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
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    .header-modal{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 25px 25px;
        .close-modal{
            border: 1px solid transparent;
            background: transparent;
            padding: 0;
            svg{
                font-size: 30px;
                color: #757575;
            }
        }
    }
`;
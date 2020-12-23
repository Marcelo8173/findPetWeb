import React from 'react';
import {Container,Content} from './styles';

interface IModalProps{
    openModal: boolean;
}

const Modal: React.FC<IModalProps> = ({children,openModal}) => {
    return(
        <Container openModal={openModal}>
            <Content>
                {children}
            </Content>
        </Container>
    )
}

export default Modal;
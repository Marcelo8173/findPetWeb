import React, {useState, useEffect } from 'react';
import {Container,Content} from './styles';

interface IModalProps{
    isOpen: boolean;
}

const Modal: React.FC<IModalProps> = ({children,isOpen}) => {

    const [modalStatus, setModalStatus] = useState(isOpen);

    useEffect(() => {
        setModalStatus(isOpen);
      }, [isOpen]);
    
    return(
        <Container openModal={modalStatus}>
            <Content>
                {children}
            </Content>
        </Container>
    )
}

export default Modal;
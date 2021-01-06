import React from 'react';
import {Container,Content} from './styles';
import { Background } from '../Login/styles';
import Input from '../../components/input';
import { FiMail, FiUser, FiLock } from 'react-icons/fi';

const NewUser:React.FC = () => {
    return(
        <Container>
            <Content>
                <Input name="name" icon={FiUser} placeholder="Nome"/>
                <Input name="email" icon={FiMail} placeholder="E-mail"/>
                <Input name="password" type="password" icon={FiLock} placeholder="Senha"/>
            </Content>
            <Background />
        </Container>
    )
}

export default NewUser;
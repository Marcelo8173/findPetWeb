import React from 'react';
import {Container,Content} from './styles';
import { Background } from '../Login/styles';
import Input from '../../components/input';
import { FiMail } from 'react-icons/fi';

const NewUser:React.FC = () => {
    return(
        <Container>
            <Content>
                <Input 
                 name="email" 
                 icon={FiMail} 
                 placeholder="E-mail"
                 />
            </Content>
            <Background />
        </Container>
    )
}

export default NewUser;
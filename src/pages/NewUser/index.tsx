import React, { useCallback, useRef } from 'react';
import {Container,Content} from './styles';
import {FormHandles} from '@unform/core';
import { Background } from '../Login/styles';
import Input from '../../components/input';
import { FiMail, FiUser, FiLock } from 'react-icons/fi';
import {Form} from '@unform/web';


interface IDatas{
    name: string;
    email: string;
    password: string;
}

const NewUser:React.FC = () => {
    const formRef = useRef<FormHandles>(null);


    const HandleSubmit = useCallback( async (data:IDatas) => {
        formRef.current?.setErrors({});

        
            
    },[]);
    return(
        <Container>
            <Content>
                <Form ref={formRef} onSubmit={HandleSubmit}>
                    <Input name="name" icon={FiUser} placeholder="Nome"/>
                    <Input name="email" icon={FiMail} placeholder="E-mail"/>
                    <Input name="password" type="password" icon={FiLock} placeholder="Senha"/>

                    <button type="submit">Cadastrar</button>
                </Form>
            </Content>
            <Background />
        </Container>
    )
}

export default NewUser;
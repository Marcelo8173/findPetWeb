import React, { useCallback } from 'react';
import boyandcat from '../../assets/boyandcat.png'
import Logo from '../../assets/Logo.svg';
import {Container,Content,AnimationContainer,Background} from './styles';
import { useHistory, Link } from 'react-router-dom';

const Login: React.FC = () => {
    const history = useHistory();
    const handleToLogin = useCallback(() => {
        history.push('/dashboard');
    },[history])

    return(
        <Container>
            <Content>
                <AnimationContainer>
                    <img src={Logo} alt="Logo GoBarber"/>
                        <h1>Faça seu logon</h1>
                        <input type="text"/>
                        <input type="text"/>
                        <button onClick={handleToLogin}>asd</button>
                        <Link to="/recuperar_senha">Esqueci minha senha</Link>
                    <Link to="/cadastrar">
                        
                        Criar conta</Link>
                </AnimationContainer>
            </Content>
            <Background />
        </Container>
    )
}

export default Login;
import React, { useCallback } from 'react';
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
                        <h1>Login</h1>
                        <input placeholder="E-mail" type="text"/>
                        <input placeholder="Senha" type="password"/>
                        <button onClick={handleToLogin}>Entrar</button>
                        {/* <Link to="/recuperar_senha">Esqueci minha senha</Link> */}
                </AnimationContainer>
            </Content>
            <Background />
        </Container>
    )
}

export default Login;
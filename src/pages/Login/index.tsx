import React, { useCallback } from 'react';
import boyandcat from '../../assets/boyandcat.png'
import Logo from '../../assets/Logo.svg';
import {Container,WhyAdopt,AsideContainer} from './styles';
import { useHistory } from 'react-router-dom';

const Login: React.FC = () => {
    const history = useHistory();
    const handleToLogin = useCallback(() => {
        history.push('/dashboard');
    },[history])

    return(
        <Container>
            <div>
                <WhyAdopt>
                    <h1>Bem vindo a iniciativa findPet</h1>
                    <h2>Acreditamos que amor não se compra</h2>
                    <img src={boyandcat} alt=""/>
                    <p>Por que adotar é tudo de bom?</p>
                    <button>Saiba mais</button>
                </WhyAdopt>
            </div>
            <AsideContainer>
                <div>
                    <img src={Logo} alt=""/>
                    <input type="text"/>
                    <input type="text"/>
                    <button onClick={handleToLogin}>Entrar</button>
                </div>
            </AsideContainer>
        </Container>
    )
}

export default Login;
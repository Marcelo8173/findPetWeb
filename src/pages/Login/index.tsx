import React from 'react';
import boyandcat from '../../assets/boyandcat.png'
import Logo from '../../assets/Logo.svg';
import {Container,WhyAdopt} from './styles';

const Login: React.FC = () => {
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
            <aside>
                <img src={Logo} alt=""/>

            </aside>
        </Container>
    )
}

export default Login;
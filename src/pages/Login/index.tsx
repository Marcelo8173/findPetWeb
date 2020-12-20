import React, { useCallback, useState } from 'react';
import Logo from '../../assets/Logo.svg';
import {Container,Content,AnimationContainer,Background} from './styles';
import { useHistory } from 'react-router-dom';


export interface ITabs{
    id: number;
    type: string;
}

const Login: React.FC = () => {
    const history = useHistory();
    const [tabs, setTabs] = useState<ITabs>({id:2,type:'02'});

    const handleToLogin = useCallback(() => {
        history.push('/dashboard');
    },[history])

    const handleToChangeButtons = useCallback((id:number) => {
        if(id === 1){
            setTabs({
                id,
                type: '01'
            });
        }else{
            setTabs({
                id,
                type: '02'
            });
        }
    },[]);

    return(
        <Container>
            <Content>
                <AnimationContainer select={tabs}>
                    <div className="button-container">
                        <button onClick={() => handleToChangeButtons(2)}>Por quê adotar?</button>
                        <button onClick={() => handleToChangeButtons(1)}>Login</button>
                    </div>
                    {tabs.type === '01'? (
                        <>
                        <img src={Logo} alt="Logo GoBarber"/>
                            <h1>Login</h1>
                            <input placeholder="E-mail" type="text"/>
                            <input placeholder="Senha" type="password"/>
                            <button onClick={handleToLogin}>Entrar</button>
                            {/* <Link to="/recuperar_senha">Esqueci minha senha</Link> */}
                        </>
                    ): (
                        <div>Olá</div>
                    )}
                </AnimationContainer>
            </Content>
            <Background />
        </Container>
    )
}

export default Login;
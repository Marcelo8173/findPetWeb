import React from 'react';
import { Container,HeaderProfile,Background} from './styles';
import Header from '../../components/header';

const Profile: React.FC = () => {
    return(
        <Container>
            <Header />
            <Background>
                <img src="https://www.formuladoconsorcio.com.br/adm-conslike/kcfinder/upload/images/lidercon-consorcios/b3bec8397a4e9da5b617078c0544c6fb.jpg" alt=""/>
            </Background>
            <HeaderProfile>
                <img src="https://blog.unyleya.edu.br/wp-content/uploads/2017/12/saiba-como-a-educacao-ajuda-voce-a-ser-uma-pessoa-melhor.jpeg" alt=""/>
                <div>
                    <h1>Eleanor Stward</h1>
                    <p>4 pets adotados</p>
                </div>
            </HeaderProfile>
        </Container>
    )
}

export default Profile;
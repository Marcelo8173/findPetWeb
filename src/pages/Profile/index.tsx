import React, { useCallback } from 'react';
import { Container,HeaderProfile,Background} from './styles';
import {AiFillCamera} from 'react-icons/ai';
import Header from '../../components/header';

const Profile: React.FC = () => {
    
    const handleAvatarChange = useCallback(() => {

    },[]);

    return(
        <Container>
            <Header />
            <Background>
                <img src="https://www.formuladoconsorcio.com.br/adm-conslike/kcfinder/upload/images/lidercon-consorcios/b3bec8397a4e9da5b617078c0544c6fb.jpg" alt=""/>
            </Background>
            <HeaderProfile>
                <section>
                    <label htmlFor="avatar">
                        <img src="https://blog.unyleya.edu.br/wp-content/uploads/2017/12/saiba-como-a-educacao-ajuda-voce-a-ser-uma-pessoa-melhor.jpeg" alt=""/>
                        <div className="change-image">
                            <input type="file" id="avatar" onChange={handleAvatarChange}/>
                            <AiFillCamera size={34} color="#FFBD1D"/>
                        </div>
                    </label>       
                </section>
                <div>
                    <h1>Eleanor Stward</h1>
                    <p>4 pets adotados</p>
                    <div className="hashtag">
                        <span>#cats</span>
                        <span>#dogs</span>
                    </div>
                </div>
            </HeaderProfile>
        </Container>
    )
}

export default Profile;
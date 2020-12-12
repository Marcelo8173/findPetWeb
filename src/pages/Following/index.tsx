import React from 'react';
import HeaderContainer from '../../components/header';
import {Container,CardContainer} from './styles';

const Following: React.FC = () => {
    return(
        <Container>
            <HeaderContainer />
            <h1>Meus favoritos</h1>
            <CardContainer>
                <div>
                    <img src="https://s2.glbimg.com/slaVZgTF5Nz8RWqGrHRJf0H1PMQ=/0x0:800x450/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/U/e/NTegqdSe6SoBAoQDjKZA/cachorro.jpg" alt=""/>
                    <p>Nino</p>
                    <p>Disponivel para adoção</p>
                    <section>
                        <button>Entrar em contato</button>
                        <button>Remover dos favoritos</button>
                    </section>
                </div>
            </CardContainer>
        </Container>
    );
}

export default Following;
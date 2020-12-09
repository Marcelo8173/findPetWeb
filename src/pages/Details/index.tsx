import React from 'react';
import HeaderComponet from '../../components/header';
import {Container,ContentContainer} from './style';

const Details: React.FC = () => {
    return(
        <Container>
            <HeaderComponet />
            <h1>Nino</h1>
            <ContentContainer>
                <img src="https://s2.glbimg.com/slaVZgTF5Nz8RWqGrHRJf0H1PMQ=/0x0:800x450/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/U/e/NTegqdSe6SoBAoQDjKZA/cachorro.jpg" alt=""/>
                <aside>
                    <h2>Descrição</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Reiciendis mollitia enim iste ratione, voluptatibus alias 
                        doloremque, explicabo aperiam cumque voluptas vero unde aliquam 
                        numquam ea, illo quia quidem temporibus voluptate.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Reiciendis mollitia enim iste ratione, voluptatibus alias 
                        doloremque, explicabo aperiam cumque voluptas vero unde aliquam 
                        numquam ea, illo quia quidem temporibus voluptate.</p>
                    <div className="buttons">
                        <button>Adicionar a minha lista</button>
                        <button>Entrar em contato</button>
                    </div>
                </aside>
            </ContentContainer>
        </Container>
    );
}

export default Details;
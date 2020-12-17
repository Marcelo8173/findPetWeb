import React from 'react';
import HeaderContainer from '../../components/header';
import {Container,CardContainer} from './styles';
import { useFollow } from '../../hooks/Following';

const Following: React.FC = () => {
    const {itemsAdd} = useFollow();
    return(
        <Container>
            <HeaderContainer />
            <h1>Meus favoritos</h1>
            {itemsAdd.map(item => (
                <CardContainer key={item.id}>
                    <div>
                        <img src={item.imageUrl} alt={item.name}/>
                        <p><span>Nome: </span>{item.name}</p>
                        <p><span>Status: </span>Disponivel para adoção</p>
                        <section>
                            <button className="contact">Entrar em contato</button>
                            <button className="remove">Remover dos favoritos</button>
                        </section>
                    </div>
                </CardContainer>
            ))}
        </Container>
    );
}

export default Following;
import React from 'react';
import Logo from '../../assets/Logo.svg';
import {Container} from './styles';

const Header: React.FC = () => {
    return(
        <Container>
            <div className="logo-container">
                <img src={Logo} alt="findPet" width="120px"/>
                <div>
                    <button>Pagina inicial</button>
                    <button>Hoje</button>
                </div>
            </div>
            <div className="bell" >
                <button>Sino</button>
            </div>
        </Container>
    )
}

export default Header;
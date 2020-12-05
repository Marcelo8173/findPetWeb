import React from 'react';
import Logo from '../../assets/Logo.svg';
import {Container} from './styles';
import { Link } from 'react-router-dom';

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
                <Link to="/following">Sino</Link>
            </div>
        </Container>
    )
}

export default Header;
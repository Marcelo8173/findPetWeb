import React, { useCallback } from 'react';
import Logo from '../../assets/Logo.svg';
import {Container} from './styles';
import { Link, useHistory } from 'react-router-dom';
import {GiDogBowl} from 'react-icons/gi';


const Header: React.FC = () => {
    const history = useHistory();

    const handleDahsboard = useCallback(() =>{
        history.push('/');
    },[history]);

    return(
        <Container>
            <div className="logo-container">
                <img src={Logo} alt="findPet" width="120px"/>
                <div>
                    <button onClick={handleDahsboard}>Pagina inicial</button>
                    <button>Hoje</button>
                </div>
            </div>
            <div className="bell" >
                <Link to="/following">
                    Minha lista
                    <GiDogBowl size={35} color="#FFBD1D"/>
                </Link>
            </div>
        </Container>
    )
}

export default Header;
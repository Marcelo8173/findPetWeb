import React, { useCallback } from 'react';
import Logo from '../../assets/Logo.svg';
import {Container} from './styles';
import { Link, useHistory } from 'react-router-dom';
import {GiDogBowl} from 'react-icons/gi';
import {FiLogOut,FiUser} from 'react-icons/fi';


const Header: React.FC = () => {
    const history = useHistory();

    const handleDahsboard = useCallback(() =>{
        history.push('/dashboard');
    },[history]);

    return(
        <Container>
            <div className="logo-container">
                <img src={Logo} alt="findPet" width="100px"/>
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
                <Link to="/dashboar">
                    <FiUser size={30} color="#FFBD1D"/>
                </Link>
                <Link to="/">
                    <FiLogOut size={30} color="#FFBD1D" />
                </Link>
            </div>
        </Container>
    )
}

export default Header;
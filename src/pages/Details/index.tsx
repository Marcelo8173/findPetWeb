import React from 'react';
import HeaderComponet from '../../components/header';
import {Container} from './style';

const Details: React.FC = () => {
    return(
        <Container>
            <HeaderComponet />
            <h1>Nino</h1>
        </Container>
    );
}

export default Details;
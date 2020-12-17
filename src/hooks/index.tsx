import React from 'react';
import {Following} from './Following';

const AppProvider: React.FC = ({children}) =>{
    return(
        <Following>
            {children}
        </Following>
    );
};

export default AppProvider;
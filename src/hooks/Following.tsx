import React, { useContext, createContext, useCallback } from 'react';

interface FollowContextData{
    addToFollow(): void;
};

const FollowingContext = createContext<FollowContextData>({} as FollowContextData);

const addToFollow = useCallback(() => {
    console.log('aqui')
},[])

export const Following: React.FC = ({children}) => {
    return(
        <FollowingContext.Provider value={{addToFollow}}>
            {children}
        </FollowingContext.Provider>
    );
}

export function useFollow(): FollowContextData{
    const context = useContext(FollowingContext);
    if(!context){
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
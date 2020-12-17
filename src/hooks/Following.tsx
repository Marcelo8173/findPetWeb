import React, { useContext, createContext, useCallback } from 'react';

interface FollowContextData{
    addToFollow(): void;
};

const FollowingContext = createContext<FollowContextData>({} as FollowContextData);


export const Following: React.FC = ({children}) => {
    const addToFollow = useCallback(() => {
        console.log('aqui')
    },[])
    
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
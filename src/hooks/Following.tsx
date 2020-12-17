import React, { useContext, createContext, useCallback } from 'react';
import { IItems } from '../pages/Dashboard';

interface FollowContextData{
    addToFollow(item:IItems): void;
};

const FollowingContext = createContext<FollowContextData>({} as FollowContextData);


export const Following: React.FC = ({children}) => {
    const addToFollow = useCallback((item:IItems) => {
        console.log(item)
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
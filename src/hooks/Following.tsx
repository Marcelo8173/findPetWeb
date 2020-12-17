import React, { useContext, createContext, useCallback, useState, useEffect } from 'react';
import { IItems } from '../pages/Dashboard';

interface FollowContextData{
    addToFollow(item:IItems): void;
};

const FollowingContext = createContext<FollowContextData>({} as FollowContextData);


export const Following: React.FC = ({children}) => {
    
    const [itemsAdd, setItemsAdd] = useState<IItems[]>([]);
    
    useEffect(() => {
        const items = localStorage.getItem('@findPet: item'); 
        if(items !== null){
            setItemsAdd(JSON.parse(items));
        }
    },[])

    const addToFollow = useCallback((item:IItems) => {
        try {
            const arrayOfPet = itemsAdd;

            let equals = arrayOfPet.find(items => items.id === item.id);
           
            if(equals){
                console.log('existe');
                return;
            }
            
            arrayOfPet.push(item);
    
            setItemsAdd(arrayOfPet);
    
            localStorage.setItem('@findPet: item', JSON.stringify(arrayOfPet));
    
            return arrayOfPet;
            
        } catch (error) {
            console.error(error)
        }
    },[itemsAdd]);

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
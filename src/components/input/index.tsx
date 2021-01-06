import React, {InputHTMLAttributes, useRef, useState, useCallback} from 'react';
import {Container} from './style';
import {IconBaseProps} from 'react-icons';
import {FiAlertCircle} from 'react-icons/fi';


interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    name: string;
    containerStyle?: object;
    icon?: React.ComponentType<IconBaseProps>;
}



const Input: React.FC<InputProps> = ({name, containerStyle={}, icon: Icon, ...rest}) => {
    const InputRef  = useRef<HTMLInputElement>(null);
    const [isFocus, setIsFocus] = useState(false);
    const [isField, setIsfield] = useState(false);

    const handleInputBlur = useCallback(() =>{
        setIsFocus(false);

        if(InputRef.current?.value){
            setIsfield(true)
        }else{
            setIsfield(false)
        }
    }, []);

    const handleInputFocus = useCallback(()=>{
        setIsFocus(true);
    }, []);
    
    return(
        <Container style={containerStyle} isField={isField} isFoucosed={isFocus}>
            {Icon && <Icon size={20} />}
            <input
                onFocus={handleInputFocus}
                onBlur={handleInputBlur} 
                ref={InputRef} {...rest}
            />

            {/* <FiAlertCircle color='#c53030' size={20}/> */}
            
        </Container>
    )
}

export default Input;
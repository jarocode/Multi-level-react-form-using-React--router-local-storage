import React, {useState, createContext} from 'react';

export const ContactContext = createContext();

export const ContactProvider = ({children}) => {
    
    const [emailV, setEmailV] = useState('');
    const [phoneV, setPhoneV] = useState('');
    const [addV, setAddV] = useState('');
    
    return ( 
        <ContactContext.Provider value={{
            Email: [emailV, setEmailV],
            Phone: [phoneV, setPhoneV],
            Addr: [addV, setAddV],
        }}>
            {children}
        </ContactContext.Provider>
     );
}
 


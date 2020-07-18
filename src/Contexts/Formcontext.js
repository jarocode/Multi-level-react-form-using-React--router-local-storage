import React, {useState,createContext} from 'react';

export const FormContext = createContext();

export const FormProvider  = ({children}) => {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [lasted, setLasted] = useState('');
    const [isloggedIn, setIsLoggedIn] = useState(false);
    return ( 
        <FormContext.Provider value={{
            user: [user, setUser],
            pass: [pass, setPass],
            logged: [isloggedIn, setIsLoggedIn],
            lasted: [lasted, setLasted]
            }}>
              {children}
        </FormContext.Provider>
     );
}
 

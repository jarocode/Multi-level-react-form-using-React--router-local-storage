import React, {useState,createContext} from 'react';

export const PersonalContext = createContext();

export const PersonalProvider = ({children}) => {
    const [firstN, setFirstN] = useState();
    const [lastN, setLastN] = useState();
    const [ageN, setAgeN] = useState();
    const [marryN, setMarryN] = useState();
    const [occuN, setOccuN] = useState();
    const [expN, setExpN] = useState();
    const [gendN, setGendN] = useState();
    
    return (  
        <PersonalContext.Provider value={{ 
            First : [firstN, setFirstN],
            Last : [lastN, setLastN],
            Age : [ageN, setAgeN],
            Marry : [marryN, setMarryN],
            Occu : [occuN, setOccuN],
            Exp : [expN, setExpN],
            Gen : [gendN, setGendN]
        }}>
              {children}
        </PersonalContext.Provider>
    );
}
 

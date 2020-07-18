import React, {useState, useEffect} from 'react';


const useForm = (callback, valids) => {
    
    const [values, setValues] = useState({
        first:'', 
        last:'', 
        username:'', 
        password:'', 
        confirm:'', 
        age:'',
        isSingle: false,
        isMarried: false,
        isSeparated:false,
        isDivorced: false,
        gender:'',
        occupation: '',
        exp:'',
        email: '',
        phone: '',
        Address: ''
    });

    const [errors, setErrors] = useState({
        first:'', 
        last:'', 
        username:'', 
        password:'', 
        confirm:'',
        age:'',
        isSingle: false,
        isMarried: false,
        isSeparated:false,
        isDivorced: false,
        gender: '',
        occupation: '',
        exp: '',
        email: '',
        phone: '',
        Address: ''
    });
    
    const[isSubmitted, setIssubmitted] = useState(false);
    
    const handleChange = e => {
       const {name, value, checked, type} = e.target;
       type === 'checkbox' ? setValues({...values, [name] : checked}) :
       setValues ({
            ...values,
            [name] : value
       });
       callback();
    }

    

    const handleSubmit = e => {
        e.preventDefault();
        setErrors(valids(values));
        setIssubmitted(true);
        // console.log(Object.keys(errors).length)
        // console.log(Object.keys(errors))
        // if(Object.keys(errors).length === 0) {
            // callback();
        // }
        
    }

    useEffect(() => {
       if(Object.keys(errors).length === 0 ) {
           callback();
           
       }
    }, [errors]);
    

    
    return {
        handleChange,
        handleSubmit,
        values,
        errors,
        isSubmitted
    };
};
 
export default useForm;
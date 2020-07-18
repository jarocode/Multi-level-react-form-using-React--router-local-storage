const Validate = (value) => {
    let errors = {};
    if(!value.first) {
        errors.first ='required';
    }
    
     if(!value.last) {
        errors.last ='required';
    }
    if(!value.username) {
        errors.username ='required';
    }
     if(!value.password) {
        errors.password ='required';
    }
     if(!value.confirm) {
        errors.confirm ='required';
    }
    else if(value.password !== value.confirm) {
        errors.confirm ="password doesn't match";
    }
    
    return errors;
}
 
export default Validate;
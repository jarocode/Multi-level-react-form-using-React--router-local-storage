const Validate = (val) => {
    let err = {}
    if(!val.email) {
        err.email = 'required'
    }
    
    if(!val.phone) {
        err.phone = 'required'
    }
    
    if(!val.Address) {
        err.Address = 'required'
    }
    return err;
}
 
export default Validate;
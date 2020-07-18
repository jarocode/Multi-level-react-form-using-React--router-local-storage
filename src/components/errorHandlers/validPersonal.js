const Validate = (value) => {
    let err = {};
    if(!value.first) {
      err.first='required'
    }
    
    if(!value.last) {
        err.last ='required';
    }
    
    if(!value.age) {
        err.age ='required';
    }
    
    if(!value.gender) {
        err.gender = 'choose a gender';
    }

    if(!value.isSingle && !value.isDivorced && !value.isSeperated && !value.isMarried) {
        err.isSingle = 'choose a marital status';
    }
    else if(value.isSingle && value.isDivorced || value.isSeperated && value.isMarried) {
        err.isSingle = "you can't have more than one gender!";
    }

    if (!value.occupation || !value.exp) {
          err.exp = 'complete this section';
    }

    return err;
}
 
export default Validate;


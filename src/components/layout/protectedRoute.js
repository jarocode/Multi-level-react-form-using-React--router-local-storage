import React, {useContext, useState} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {FormContext} from '../../Contexts/Formcontext';


//component prop is destructured and renamed 'Component' in line 6
//...rest is the rest of the property that are passed in from
// props is used in case you want to pass some properties from route definitions 

export const ProtectedRoute = ({component: Component, ...rest}) => {
    
    const {logged} = useContext(FormContext);
    const [islogged ,setIsLogged] = logged;
    
    return (
        <Route 
            {...rest} 
            render={
                (props) => {
                    if (islogged) {
                        return <Component {...props}/>
                    }
                    else {
                        return <Redirect to={
                            {
                                pathname: '/',
                                state: {
                                    from: props.location
                                }
                            }
                        }
                        />
                    }
                    
                }
            }
        />
    );
}
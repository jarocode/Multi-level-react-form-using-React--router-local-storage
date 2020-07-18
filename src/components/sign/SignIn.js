import React, {useContext, useState, useEffect} from 'react';
import styled from '@emotion/styled';
import {Link} from 'react-router-dom';
import {FormContext} from '../../Contexts/Formcontext';
import {withRouter} from 'react-router-dom';

const Container = styled.div`
        margin: 4.5rem 20rem 0rem 25rem;
    `
    const H2 = styled.h2`
        margin-bottom: 2.5rem;
        color: #23355f;
    `
    const Err = styled.div`
        border: 1px solid #f00;
        text-align: center;
        padding: 5px 5px;
        border-radius: .5rem;
        color: #fff;
        font-weight: bold;
        
    `
    
    const Input = styled.input`
        border: none;
        border-bottom: 1px solid #aaa;
        margin-bottom: 1rem;
        width: 100%;
        &:focus {
             outline: none;
        }
    `
    const Button = styled.button`
         width: 108%;
         margin-top: 1.5rem;
         height: 2.6rem;
         border: 1px solid #2146f7;
         border-radius: 1.7rem;
         color: #fff;
         background: linear-gradient(to right, #2146f7, #f23689);
         font-weight: bold;
    `
   
    const P1 = styled.p`
        color: #aaa;
    `
    
    const P2 = styled.p`
          margin-top: 2rem;
          text-align: center;
    `
    const Strong = styled.strong`
         color: red;
    `

const Signin = ({history}) => {
    
    const [vals, setVals] = useState({users: '', passwd: ''});
    const {user, logged} = useContext(FormContext);
    const  [userValue, setUserValue] = user;
    const  [errorValue, setErrorValue] = useState('');
    const  [islogged, setIsLogged] = logged;
    
    const handleChange = e => {
        let {name, value} = e.target;
        setVals({
            ...vals,
            [name] : value
        })
        
    }

    
    const handleSubmit = e => {
        e.preventDefault();
        setUserValue(vals.users);
        setErrorValue('');
         const Details = Object.entries(localStorage);
         
         // checks if a users detail is in localstorage
         let ref = Details.filter(
             arr =>  JSON.parse(arr[0]) === vals.users && 
                     JSON.parse(arr[1]).pass === vals.passwd
             );
         ref.length !== 0? setIsLogged(true):
        setErrorValue('wrong username or password!');
        console.log(userValue);
    }

    useEffect (() => {
        if(islogged) {
            // checks if the users full details are in localstorage
            let newArr = JSON.parse(localStorage.getItem(JSON.stringify(userValue)));
            console.log(Object.values(newArr).length )
            Object.values(newArr).length === 13 ? history.push('/info') : 
            history.push('/personal')
        } 
    },[islogged]);
    
return ( 
        <Container>
            <Err style={{
                background: errorValue === 'logged in successfully!' ? 
                '#0f0' : '#f00',
                opacity: errorValue === '' ? '0' : setTimeout(() => {
                    return '1';
                },3000)
                }}>
                    {errorValue}
            </Err>
            <H2>Sign in</H2>
            <form onSubmit={handleSubmit}>
                <label>
                    <P1>Username</P1>
                    <Input 
                        type='text' 
                        onChange={handleChange} 
                        value={vals.users}
                        name='users'
                    />
                </label>
                <label>
                    <P1>Password</P1>
                        <Input 
                        type='password' 
                        onChange={handleChange} 
                        value={vals.passwd}
                        name='passwd'
                    />
                </label>
                <Button>Log in</Button>
                <P2>Don't have an account? <Link to='/signup'><Strong>Signup</Strong></Link></P2>
            </form>
        </Container>
     );
}
 
export default withRouter(Signin);
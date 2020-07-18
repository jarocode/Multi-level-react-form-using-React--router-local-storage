import React, {useContext} from 'react';
import styled from '@emotion/styled';
import {Link} from 'react-router-dom';
import {ContactContext} from '../../Contexts/ContactContext';
import {PersonalContext} from '../../Contexts/PersonalContext';
import {FormContext}   from '../../Contexts/Formcontext';
import newItems from '../Functions/AddFunction';

const Container = styled.div`
        margin: 2rem 12rem 3rem 12rem;
        border: 1px solid #ccc;
        background: #abbddf;
        border-radius: 10px;
        text-align: center;
`
const Div = styled.div`
        margin: 2rem 3rem 5rem 3rem;
`
const H1 = styled.h1`
        color: #fff;
        border-bottom: 1px solid #fff;
        margin: 0px 3rem 0 3rem;
        padding: 0 0 2rem 0;
`
const H2 = styled.h2`
       color: #fff;
       font-weight: bold; 
`

const P = styled.p`
       font-weight: normal;
       color: #fff;   
`
const Span = styled.span`
       font-weight: bold; 
`

const Button1 = styled.button`
        width: 10rem;
        height: 2.5rem;
        background: #efffff;
        border: 1px solid #fff;
        border-radius: 5px;
        box-shadow: 1px 2px 3px #23355f;
        color: #888;
        font-weight: bold;
`
const Button2 = styled.button`
        width: 10rem;
        height: 2.5rem;
        background: #23355f;
        border-radius: 5px;
        color: #fff;
        margin-left: 10px;
        padding-top: 7px;
        text-align: center;
        font-weight: bold;
`

const Summary = ({history}) => {
    
        const {First, Last, Age, Marry, Occu, Exp, Gen} = useContext(PersonalContext);
        const [firstVal, setFirstVal] = First;
        const [lastVal, setLastVal] = Last;
        const [ageVal, setAgeVal] = Age;
        const [marryVal, setMarryVal] = Marry;
        const [occuVal, setOccuVal] = Occu;
        const [expVal, setExpVal] = Exp;
        const [genVal, setGenVal] = Gen;

        const {Email, Phone, Addr} = useContext(ContactContext);
        const [emailVal, setEmailVal] = Email;
        const [phnVal, setPhnVal] = Phone;
        const [addrVal, setAddrVal] = Addr;
    
        const {lasted, user} = useContext(FormContext);
        const [auth, setAuth] = lasted;
        const [currentUser, setCurrentUser] = user;
        
        let newDetails = newItems(
            firstVal, 
            lastVal, 
            ageVal, 
            marryVal,
            occuVal,
            expVal,
            emailVal,
            phnVal,
            genVal,
            addrVal
            );
        
        const handleSubmit = () => {
            let datas = JSON.parse(localStorage.getItem(JSON.stringify(currentUser)));
            let updatedData = {...newDetails, ...datas};
            localStorage.setItem(JSON.stringify(currentUser), JSON.stringify(updatedData));
            history.push('/alert');
        }
        
        
        return ( 
                <Container>
                        <H1>Detail Summary</H1>
                        <Div style={{borderBottom: '1px solid #fff', paddingBottom: '2rem'}}>
                            <H2>Personal Details</H2>
                            <P>
                                FullName:&nbsp;<Span>{firstVal} {lastVal}</Span>
                            </P>
                            <P>
                                Age:&nbsp;<Span>{ageVal}</Span> 
                            </P>
                            <P>
                                Gender:&nbsp;<Span>{genVal}</Span> 
                            </P>
                            <P>
                                Marital status:&nbsp;<Span>{marryVal}</Span> 
                            </P>
                            <P>
                                occupation:&nbsp;<Span>{occuVal}</Span>&nbsp;with {expVal}years experience 
                            </P>
                        </Div>
                        <Div>
                            <H2>Contact Details</H2>
                            <P>
                                Email Address: <Span>{emailVal}</Span>
                            </P>
                            <P>
                                Phone number: <Span>{phnVal}</Span>
                            </P>
                            <P>
                                Home Address: <Span>{addrVal}</Span>
                            </P>
                        </Div>
                        <Div>
                             <Link to='/contact'><Button1>back</Button1></Link>
                             <Button2 onClick={handleSubmit}>confirm</Button2>
                        </Div>
                </Container>
        );
}
 
export default Summary;
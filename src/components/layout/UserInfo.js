import React, {useContext} from 'react';
import styled from '@emotion/styled';
import {FormContext}   from '../../Contexts/Formcontext';

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


const UserInfo = () => {
        
        const {user} = useContext(FormContext);
        const [currentUser, setCurrentUser] = user;

        let datas = JSON.parse(localStorage.getItem(JSON.stringify(currentUser)));
        
        const {
            FirstName, 
            LastName, 
            MyAge, 
            Status, 
            Job, 
            Experience, 
            Mail, 
            number, 
            Gender, 
            HomeAddr
        } = datas
    return ( 
            <Container>
                    <H1>Detail Summary</H1>
                        <Div style={{borderBottom: '1px solid #fff', paddingBottom: '2rem'}}>
                            <H2>Personal Details</H2>
                            <P>
                                FullName:&nbsp;<Span>{FirstName} {LastName}</Span>
                            </P>
                            <P>
                                Age:&nbsp;<Span>{MyAge}</Span> 
                            </P>
                            <P>
                                Gender:&nbsp;<Span>{Gender}</Span> 
                            </P>
                            <P>
                                Marital status:&nbsp;<Span>{Status}</Span> 
                            </P>
                            <P>
                                occupation:&nbsp;<Span>{Job}</Span>&nbsp;with {Experience}years experience 
                            </P>
                        </Div>
                        <Div>
                            <H2>Contact Details</H2>
                            <P>
                                Email Address: <Span>{Mail}</Span>
                            </P>
                            <P>
                                Phone number: <Span>{number}</Span>
                            </P>
                            <P>
                                Home Address: <Span>{HomeAddr}</Span>
                            </P>
                        </Div>
                    
            </Container>
    );
}

export default UserInfo;
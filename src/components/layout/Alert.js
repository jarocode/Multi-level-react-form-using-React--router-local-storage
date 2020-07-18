import React, {useContext} from 'react';
import styled from '@emotion/styled';
import {PersonalContext} from '../../Contexts/PersonalContext';

const Container = styled.div`
    width: 100%;
    height: 100%;
    background: #000;
    padding-top: 12%;
    padding-bottom: 39%;
`
const H1 = styled.h1`
    font-weight: bold;
    color: #fff;
    margin: 6rem 6rem 0 6rem;
`

const Alert = () => {
    
    const {Gen, Last} = useContext(PersonalContext);
    const [gender, setGender] = Gen;
    const [last, setLast] = Last;
    
    return ( 
        <Container>
            <H1>{gender === 'male'? 'Mr' : 'Mrs'} {last} your details are saved Successfully!!</H1>
        </Container>
     );
}
 
export default Alert;
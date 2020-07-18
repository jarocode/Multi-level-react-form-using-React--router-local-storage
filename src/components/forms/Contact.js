import React, {useContext} from 'react';
import styled from '@emotion/styled';
import useForm from '../forms/FormHandler';
import Validate from '../errorHandlers/validContact';
import {Link} from 'react-router-dom';
import {ContactContext} from '../../Contexts/ContactContext';


const Container = styled.div`
        margin: 2rem 12rem 3rem 12rem;
        border: 1px solid #ccc;
        background: #abbddf;
        border-radius: 10px;
        `

const H2 = styled.h2`
        color: #fff;
        font-weight: normal;
        margin: 3rem 5rem 4rem 12rem;
`
const Form = styled.div`
        margin-left: 2rem;
        margin-bottom: 4rem;
`  
const P = styled.p`
        color: #fff;
        font-weight: normal;
` 
const Input = styled.input`
        width: 80%;
        height: 2rem;
        border-radius: 5px;
` 

const Span = styled.span`
        color: #f00;
        font-style: italic;
`
const Div = styled.div`
        margin-top: 4rem;
        display: flex;
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


const Contact = ({history}) => {
    
    const {Email, Phone, Addr} = useContext(ContactContext);
    const [emailVal, setEmailVal] = Email;
    const [phnVal, setPhnVal] = Phone;
    const [addrVal, setAddrVal] = Addr;
    
    const Submit = () => {
        console.log(values);
        setEmailVal(email);
        setPhnVal(phone);
        setAddrVal(Address);
        isSubmitted && history.push('/summary');
    }
    
    const {values, handleSubmit, handleChange, errors, isSubmitted} = useForm(Submit, Validate);
    const {email, Address, phone} = values;

    
    return ( 
        <Container>
            <H2>Contact Info</H2>
            <Form>
                <label>
                    <P>Email Address</P>
                    <Input 
                        type='text' 
                        name='email' 
                        value={email}
                        onChange={handleChange}
                    />
                    <Span>{errors.email}</Span>
                </label>
                <label>
                    <P>Phone number</P>
                    <Input 
                        type='text' 
                        name='phone' 
                        value={phone}
                        onChange={handleChange} 
                    />
                    <Span>{errors.phone}</Span>
                </label>
                <label>
                    <P>Home Address</P>
                    <textarea 
                        style={{width: '81%', height: '7rem'}}
                        onChange={handleChange}
                        value={Address}
                        name='Address' 
                    />
                    <Span>{errors.Address}</Span>
                </label>
                <Div>
                    <Link to='/personal'><Button1>back</Button1></Link>
                    <Button2 onClick={handleSubmit}>confirm</Button2>
                </Div>
            </Form>
        </Container>
     );
}
 
export default Contact;
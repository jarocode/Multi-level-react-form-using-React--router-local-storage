import React, {useContext} from 'react';
import styled from '@emotion/styled';
import {Link} from 'react-router-dom';
import useForm from './FormHandler';
import Validate from '../errorHandlers/validPersonal';
import {PersonalContext} from '../../Contexts/PersonalContext';

const Container = styled.div`
        margin: 2rem 4rem 3rem 10rem;
        border: 1px solid #ccc;
        background: #abbddf;
        border-radius: 10px;
    `
    const Head = styled.h2`
        margin: 1.5rem 10rem 3rem 17rem;
        color: #fff;
     `
    const Flex = styled.div`
        display: flex;
        justify-content: space-around;
        border-bottom: 1px solid #ddd;
        padding: 0rem 2rem 2.5rem 2rem;
        margin-bottom: 2rem;
     `
    const Input1 = styled.input`
        width: 17rem;
        height: 2rem;
        border: 1px solid #999;
        border-radius: 5px;
    `
    const Input2 = styled.input`
        width: 2rem;
        border: 1px solid #999;
        border-radius: 2px;
    `
    const H3 = styled.h3`
        text-align: center;
        color: #fff;
        margin: 1.5rem;
    `
    
    const Flex2 = styled.div`
        display:flex;
        justify-content: space-around;
        padding: 0 15rem 2rem 15rem;
        border-bottom: 1px solid #ddd;
    `

    const Flex3 = styled.div`
        display:flex;
        justify-content: space-around;
        border-bottom: 1px solid #ddd;
        padding-bottom: 2rem;
    `
    const Flex4 = styled.div`
        display:flex;
        justify-content: space-around;
        margin-bottom: 3rem;
    `
    const Div = styled.div`
        margin: .2rem 0rem 4rem 15rem;
        display: flex;
    `
    const Button1 = styled.button`
        width: 20rem;
        height: 2.5rem;
        background: #efffff;
        border: 1px solid #fff;
        border-radius: 5px;
        box-shadow: 1px 2px 3px #abbddf;
        color: #888;
        font-weight: bold;
    `
    const Button2 = styled.button`
        width: 20rem;
        height: 2rem;
        background: #23355f;
        border: 1px solid #fff;
        border-radius: 5px;
        color: #fff;
        margin-left: 10px;
        padding-top: 7px;
        text-align: center;
        font-weight: bold;
    `
    const Span = styled.div`
        color: #f00;
        font-weight: normal;
        font-style: italic;
    `
    const Err = styled.p`
        color: #f00;
        position: absolute;
        margin-top: 2.6rem;
        font-style: italic;
    `
    


const Personal = ({history}) => {
     
    const {handleChange,handleSubmit,values,errors, isSubmitted} = useForm(Call, Validate);
    const {
            first, 
            last, 
            age,
            isSingle,
            isMarried,
            isSeparated,
            isDivorced,
            gender,
            occupation,
            exp
         } = values;

    const {First, Last, Age, Marry, Occu, Exp, Gen} = useContext(PersonalContext);
    const [firstVal, setFirstVal] = First;
    const [lastVal, setLastVal] = Last;
    const [ageVal, setAgeVal] = Age;
    const [marryVal, setMarryVal] = Marry;
    const [occuVal, setOccuVal] = Occu;
    const [expVal, setExpVal] = Exp;
    const [genVal, setGenVal] = Gen;

    
    function Call() {
        console.log(values);
        setFirstVal(first);
        setLastVal(last);
        setAgeVal(age);
        
        isSingle?setMarryVal('Single') : 
        isSeparated?setMarryVal('Seperated') :
        isMarried?setMarryVal('Married') :
        isDivorced?setMarryVal('Divorced') : setMarryVal('');
        
        setOccuVal(occupation);
        setExpVal(exp);
        setGenVal(gender);
        isSubmitted && history.push('/contact')
    }
    return ( 
        
        <form onSubmit={handleSubmit}>
            <Container>
                <Head>Personal Details</Head>
                <div>
                    
                        <Flex>
                            <label>
                                <p>first name</p>
                                <Input1 
                                type='text'
                                name='first'
                                value={first}
                                onChange={handleChange}/>
                                <Span>{errors.first}</Span>
                            </label>
                            
                            <label>
                                <p>last name</p>
                                <Input1 
                                type='text'
                                name='last'
                                value={last}
                                onChange={handleChange}
                                />
                                <Span>{errors.last}</Span>
                            </label>
                            
                            <label>
                                <p>Age</p>
                                <Input2 
                                type='text'
                                name='age'
                                value={age}
                                onChange={handleChange}
                                />
                                <Span>{errors.age}</Span>
                            </label>
                        
                        </Flex>
                        
                        <H3>Gender</H3>
                        <Flex2>
                            <label>
                                <p>
                                    male
                                    <input 
                                        type='radio'
                                        name='gender'
                                        value='male'
                                        checked={gender ==='male'}
                                        onChange={handleChange}
                                    />
                                    
                                </p>
                            </label>
                            
                            <label>
                                <p>female
                                <input 
                                        type='radio'
                                        name='gender'
                                        value='female'
                                        checked={gender ==='female'}
                                        onChange={handleChange}
                                    />
                                </p>
                            </label>
                            <Err>
                                {errors.gender} 
                            </Err>
                        </Flex2>
                        
                        
                        
                        <H3>Marital status</H3>
                        <Flex3>
                            <label>
                                <p>Single
                                    <input 
                                        type='checkbox'
                                        checked={isSingle}
                                        name='isSingle'
                                        onChange={handleChange}
                                    />
                                </p>
                                
                            </label>
                            <label>
                                <p>Married
                                    <input 
                                        type='checkbox'
                                        checked={isMarried}
                                        name='isMarried'
                                        onChange={handleChange}
                                    />
                                </p>
                            </label>
                            <label>
                                <p>Separated
                                <input 
                                        type='checkbox'
                                        checked={isSeparated}
                                        name='isSeperated'
                                        onChange={handleChange}
                                    />
                                </p>
                            </label>
                            <label>
                                <p>Divorced
                                <input 
                                        type='checkbox'
                                        checked={isDivorced}
                                        name='isDivorced'
                                        onChange={handleChange}
                                    />
                                </p>
                            </label>
                            <Err>
                                {errors.isSingle} 
                            </Err>
                        </Flex3>
                        
                        <H3>Occupation</H3>
                        <Flex4>
                            <label>
                                <p>
                                    What is your occupation?&nbsp;
                                    <select value={occupation}
                                            name='occupation'
                                            onChange={handleChange}    
                                    >
                                        <option value='teacher'>Teacher</option>
                                        <option value='nurse'>Nurse</option>
                                        <option value='architect'>Architect</option>
                                        <option value='banker'>Banker</option>
                                        <option value='pilot'>Pilot</option>
                                        <option value='doctor'>Doctor</option>
                                        <option value='lawyer'>Lawyer</option>
                                        <option value='engineer'>Engineer</option>
                                        <option value='other'>Other</option>
                                    </select>
                                </p>
                            </label>
                            <label>
                                <p>Work experience 
                                    <Input2 
                                    type='text' 
                                    onChange={handleChange}
                                    name='exp'
                                    value={exp}
                                    />Years
                                </p>
                            </label>
                            <Err>
                                {errors.exp} 
                            </Err>
                        </Flex4>
                        
                    
                </div>
            </Container>
            <Div>
                {/* <Button1>back</Button1> */}
                <Button2>confirm</Button2>
            </Div>
        </form>
     );
}
 
export default Personal;
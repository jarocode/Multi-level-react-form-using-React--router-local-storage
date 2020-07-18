import React from 'react';
import styled from '@emotion/styled';

const Nav = () => {
    
    const Container = styled.div`
        display: flex;
        justify-content: space-around;
        background: #23355f;
        color: #fff;
        font-weight: bold;
    `
    const Logo = styled.div`
        margin-top: 1rem;
    `
    
    const Li = styled.li`
        display: inline-block;
    `
    
    const A = styled.a`
        text-decoration: none;
        margin-left: 1rem;
    `
    
    return ( 
        <Container>
            <Logo>
                JAROscholars
            </Logo>
            <div>
                <ul>
                    <Li><A>Home</A></Li>
                    <Li><A>About</A></Li>
                </ul>
            </div>
        </Container>
     );
}
 
export default Nav;
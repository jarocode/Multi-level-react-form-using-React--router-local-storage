import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import styled from '@emotion/styled';

const Div = styled.div`
   margin : 14rem 10rem 0 28rem;
   color: #f00;
`


const Spinner = () => {
    return ( 
        <Div>
            <p><FontAwesomeIcon icon='spinner' size='7x' spin/></p>
            
        </Div>
     );
}
 
export default Spinner;
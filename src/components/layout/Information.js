import React, {useState, useEffect} from 'react';
import UserInfo from './UserInfo';
import Spinner from './Spinner';

const Info = () => {
    
    const [isready, setIsReady] = useState(false);
    
    useEffect(() => {
        setTimeout(() => {
            setIsReady(true)
        }, 3000)
    },[])
    
       
    return (
        <div>
        {isready ? <UserInfo/> : <Spinner/>}
        </div>
     )
}
 
export default Info;


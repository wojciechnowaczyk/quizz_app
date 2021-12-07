import React, {useEffect} from 'react';
import styled from 'styled-components';
import palette from '../theme/colors';

const Timer = ({timeLeft, setTimeLeft}) => {
    const countDown = () => {
        if(timeLeft > 0){
            setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
        }
    }
    useEffect(()=>{
        countDown();
    },[timeLeft])
    return(
        <Time>{timeLeft}s</Time>
    )
}

const Time = styled.p`
    font-size: 35px;
    font-family: 'Montserrat';
    color: ${palette.white};
    margin-block-start: 0;
    margin-block-end: 0;
`

export default Timer;
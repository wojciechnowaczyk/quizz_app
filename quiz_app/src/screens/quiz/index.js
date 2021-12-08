import React, { useEffect, useState} from 'react';
import styled from 'styled-components';
import Logotype from '../../assets/img/logo_expansio.png';
import { UserContext } from '../../contexts/userContext';
import { useCookies } from 'react-cookie';
import palette from '../../theme/colors';
import Question from './components/questions';
import LoginBox from './components/loginBox';
import Button from '../../components/button';

const  MainScreen = () => {
    const [userToken, setUserToken] = useState('');
    const [userId, setUserId] = useState('');
    const [cookies, setCookie, removeCookie] = useCookies();
    const value ={userToken, setUserToken, userId, setUserId};
    useEffect(()=>{
        if(cookies?.userToken){
            setUserToken(cookies.userToken)
        }
        if(cookies?.userId){
            setUserId(cookies.userId)
        }
    },[userToken, cookies])
    const logout = () => {
        setUserToken(null);
        setUserId(null);
        removeCookie("userToken");
        removeCookie("userId");
    }
    return (
        <UserContext.Provider value={value}>
            <MainBox>
                <Logo src={Logotype}/>
                {cookies.userToken && <Button title="Logout" styles={buttonStyles} onPress={logout}/>}
                <InnerBox>
                    {!userToken && <LoginBox />}
                    {userToken && <Question />}
                </InnerBox>
            </MainBox>
        </UserContext.Provider>
    )
}

const MainBox = styled.div`
    width: 100%;
    height: 100vh;
    background: rgb(2,0,36);
    background: ${palette.background}; 
    display: flex;
    align-items: center;
    justify-content: center;
`

const InnerBox = styled.div`
    width: 900px;
    min-height: 400px;
    background-color: rgba(0,0,0,0.6);
    border-radius: 20px;
    position: relative;
    padding: 30px;
    box-sizing: border-box;
`
const Logo = styled.img`
    width: 200px;
    position: absolute;
    top: 20px;
    left: 20px;
`

const buttonStyles={
    position: "absolute",
    top: "20px",
    right: "20px"
}
export default MainScreen;
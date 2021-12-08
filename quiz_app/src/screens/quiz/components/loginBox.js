import React, {useContext, useState} from 'react';
import InputWithLabel from '../../../components/inputWithLabel';
import Button from "../../../components/button";
import { UserContext } from '../../../contexts/userContext';
import { useCookies } from 'react-cookie';

const LoginBox = () => {
    const [login, setLogin] = useState();
    const [code, setCode] = useState();
    const [cookies, setCookie] = useCookies();
    const user = useContext(UserContext);
    const setUserCookie = (userToken) => {
        setCookie('userToken', userToken, {path: '/', maxAge: 360})
    };
    const handleSubmit = () => {
        fetch('http://localhost:3002/userLogin', {headers:{"Content-Type": "application/json", "Access-Control-Allow-Origin" : "*"},method: "POST", mode: "cors", body: JSON.stringify({login: login, code: code, date: new Date()})})
        .then(res => res.json())
        .then(resp => {
            console.log(resp);
            if(resp.userToken && resp.userId){
                user.setUserToken(resp.userToken);
                user.setUserId(resp.userId);
                setUserCookie(resp.userToken);
            }
        })
        .catch(err => console.log(err))
    }
    return(
        <>
            <InputWithLabel label="Login" onChange={setLogin}/>
            <InputWithLabel label="Code" onChange={setCode}/>
            <Button title="Log in" styles={{marginTop: 30}} onPress={handleSubmit}/>
        </>
    )
}

export default LoginBox;
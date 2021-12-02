import React, {useContext, useState} from 'react';
import InputWithLabel from '../../../components/inputWithLabel';
import Button from "../../../components/button";
import { UserContext } from '../../../contexts/userContext';

const LoginBox = () => {
    const [login, setLogin] = useState();
    const [code, setCode] = useState();
    const user = useContext(UserContext)
    const handleSubmit = () => {
        fetch('http://localhost:3002/userLogin', {headers:{"Content-Type": "application/json", "Access-Control-Allow-Origin" : "*"},method: "POST", mode: "cors", body: JSON.stringify({login: login, code: code, date: new Date()})})
        .then(res => res.json())
        .then(resp => {
            console.log(resp);
            user.setUserToken(resp.userToken);
            user.setUserId(resp.userId);
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
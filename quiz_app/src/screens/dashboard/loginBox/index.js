import React, {useContext, useState} from 'react';
import InputWithLabel from '../../../components/inputWithLabel';
import Button from "../../../components/button";
import { AdminContext } from '../../../contexts/adminContext';
import { useCookies } from 'react-cookie';

const LoginBox = () => {
    const [login, setLogin] = useState();
    const [password, setPassword] = useState();
    const [cookies, setCookie] = useCookies();
    const admin = useContext(AdminContext);
    const setUserCookie = (adminToken, adminId) => {
        setCookie('adminToken', adminToken, {path: '/', maxAge: 360});
        setCookie('adminId', adminId, {path: '/', maxAge: 360})
    };
    const handleSubmit = () => {
        fetch('http://localhost:3002/adminLogin', {headers:{"Content-Type": "application/json", "Access-Control-Allow-Origin" : "*"},method: "POST", mode: "cors", body: JSON.stringify({login: login, password: password, date: new Date()})})
        .then(res => res.json())
        .then(resp => {
            console.log(resp);
            if(resp.adminToken && resp.adminId){
                admin.setAdminToken(resp.adminToken);
                admin.setAdminId(resp.adminId);
                setUserCookie(resp.adminToken, resp.adminId);
            }
        })
        .catch(err => console.log(err))
    }
    return(
        <>
            <InputWithLabel label="Login" onChange={setLogin}/>
            <InputWithLabel label="Password" onChange={setPassword}/>
            <Button title="Log in" styles={{marginTop: 30}} onPress={handleSubmit}/>
        </>
    )
}

export default LoginBox;
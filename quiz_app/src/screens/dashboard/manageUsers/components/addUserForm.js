import React, {useState} from "react";
import styled from  "styled-components";
import InputWithLabel from "../../../../components/inputWithLabel";
import Button from "../../../../components/button";

const AddUserForm = () => {
    const [login, setLogin] = useState('');
    const [code, setCode] = useState('');
    const [usersListToDisplay, setUsersListToDisplay] = useState([])

    const handleSaveData = () => {
        const objectToSend = {
            date: new Date(),
            login: login,
            code: code,
        }
        fetch('http://localhost:3002/dashboard/addUser', {headers:{"Content-Type": "application/json", "Access-Control-Allow-Origin" : "*"},method: "POST", mode: "cors", body: JSON.stringify(objectToSend)})
        .then(response => response.json())
        .then(res => setUsersListToDisplay(usersListToDisplay.concat([{_id: res.id,...objectToSend}])))
        .catch(err => console.log("error:" +err))
    }
    return(
        <>
            <InputWithLabel label="Login" id="loginField" onChange={setLogin}/>
            <InputWithLabel label="Code" id="codeField" onChange={setCode}/>
            <Button title="Save" onPress={handleSaveData} />
        </>
    )
}

export default AddUserForm;
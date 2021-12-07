import React, {useState} from "react";
import InputWithLabel from "../../../../components/inputWithLabel";
import Button from "../../../../components/button";

const AddUserForm = ({usersList, setUsersList}) => {
    const [login, setLogin] = useState('');
    const [code, setCode] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('')

    const handleSaveData = () => {
        const objectToSend = {
            date: new Date(),
            login: login,
            code: code,
            name: name,
            surname: surname,
        }
        fetch('http://localhost:3002/dashboard/addUser', {headers:{"Content-Type": "application/json", "Access-Control-Allow-Origin" : "*"},method: "POST", mode: "cors", body: JSON.stringify(objectToSend)})
        .then(response => response.json())
        .then(res => setUsersList(usersList.concat([{_id: res._id,...objectToSend}])))
        .catch(err => console.log("error:" +err))
    }
    return(
        <>
            <InputWithLabel label="Name" id="nameField" onChange={setName}/>
            <InputWithLabel label="Surname" id="surnameField" onChange={setSurname}/>
            <InputWithLabel label="Login" id="loginField" onChange={setLogin}/>
            <InputWithLabel label="Code" id="codeField" onChange={setCode}/>
            <Button title="Save" onPress={handleSaveData} styles={{marginTop: 25}}/>
        </>
    )
}

export default AddUserForm;
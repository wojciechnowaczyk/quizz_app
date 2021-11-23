import React, {useState} from "react";
import styled from  "styled-components";
import InputWithLabel from "../../../../components/inputWithLabel";
import Button from "../../../../components/button";

const AddUserForm = () => {
    const [login, setLogin] = useState('');
    const [code, setCode] = useState('')

    const handleSubmit = () => {
        console.log(login);
        console.log(code);
    }
    return(
        <>
            <InputWithLabel label="Login" id="loginField" onChange={setLogin}/>
            <InputWithLabel label="Code" id="codeField" onChange={setCode}/>
            <Button title="Save" onPress={handleSubmit} />
        </>
    )
}

export default AddUserForm;
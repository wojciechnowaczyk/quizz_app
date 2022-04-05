import React, { useState } from "react";
import InputWithLabel from "../../../../components/inputWithLabel";
import Button from "../../../../components/button";
import { createUserRequest } from "../../../../store/actions/users";
import { useDispatch } from "react-redux";

const AddUserForm = () => {
  const dispatch = useDispatch();
  const [login, setLogin] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const handleSaveData = () => {
    dispatch(
      createUserRequest({
        date: new Date(),
        login: login,
        name: name,
        surname: surname,
      })
    );
  };
  return (
    <>
      <InputWithLabel label="Name" id="nameField" onChange={setName} />
      <InputWithLabel label="Surname" id="surnameField" onChange={setSurname} />
      <InputWithLabel label="Login" id="loginField" onChange={setLogin} />
      <Button
        title="Save"
        onPress={handleSaveData}
        styles={{ marginTop: 25 }}
      />
    </>
  );
};

export default AddUserForm;

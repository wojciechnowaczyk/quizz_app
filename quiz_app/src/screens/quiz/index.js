import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { UserContext } from "../../contexts/userContext";
import { useCookies } from "react-cookie";
import palette from "../../theme/colors";
import Question from "./components/questions";
import LoginBox from "./components/loginBox";
import Button from "../../components/button";
import Box from "@mui/material/Box";

const MainScreen = () => {
  const [userToken, setUserToken] = useState("");
  const [userId, setUserId] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies();
  const value = { userToken, setUserToken, userId, setUserId };
  useEffect(() => {
    if (cookies?.userToken) {
      setUserToken(cookies.userToken);
    }
    if (cookies?.userId) {
      setUserId(cookies.userId);
    }
  }, [userToken, cookies]);
  const logout = () => {
    setUserToken(null);
    setUserId(null);
    removeCookie("userToken");
    removeCookie("userId");
  };
  return (
    <UserContext.Provider value={value}>
      <MainBox>
        {cookies.userToken && (
          <Button title="Logout" styles={buttonStyles} onPress={logout} />
        )}
        <Box>
          {!userToken && <LoginBox />}
          {userToken && <Question />}
        </Box>
      </MainBox>
    </UserContext.Provider>
  );
};

const MainBox = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(2, 0, 36, 0.5);
  background: ${palette.background};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const buttonStyles = {
  position: "absolute",
  top: "20px",
  right: "20px",
};
export default MainScreen;

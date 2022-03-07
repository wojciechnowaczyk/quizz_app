import React, { useEffect } from "react";
import styled from "styled-components";
import palette from "../../../../theme/colors";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ContactMail from "@mui/icons-material/ContactMail";
import usersList from "../../../../mocks/usersList.json";

// const UsersList = ({usersList, setUsersList}) => {
const UsersList = ({ setUsersList }) => {
  const displayList = () => {
    if (usersList.length > 0) {
      return (
        <>
          {usersList.map((user) => {
            return (
              <Card sx={styles.card}>
                <ContactMail sx={styles.icon} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {user?.login}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {user?.name} {user?.surname}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">See more</Button>
                  <Button size="small" onClick={() => deleteUser(user?._id)}>
                    Delete user
                  </Button>
                </CardActions>
              </Card>
            );
          })}
        </>
      );
    }
  };

  const deleteUser = (id) => {
    console.log(id);
    fetch(`http://localhost:3002/dashboard/users/${id}`, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      method: "DELETE",
      mode: "cors",
    })
      .then((response) => response.json())
      .then((res) => {
        const index = usersList.findIndex((el) => el._id === res._id);
        const newArr1 = usersList.slice(0, index);
        const newArr2 = usersList.slice(index + 1);
        const newArr = newArr1.concat(newArr2);
        setUsersList(newArr);
      })
      .catch((err) => console.log("error:" + err));
  };
  useEffect(() => {
    fetchQuestionsToDisplay();
  }, []);

  const fetchQuestionsToDisplay = () => {
    fetch("http://localhost:3002/dashboard/users", {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      method: "GET",
      mode: "cors",
    })
      .then((response) => response.json())
      .then((data) => setUsersList(data.users))
      .catch((err) => console.log("error:" + err));
  };
  return <Box sx={styles.box}>{displayList()}</Box>;
};

const styles = {
  box: {
    flexDirection: "row",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: "20px",
    paddingTop: "45px",
  },
  card: {
    maxWidth: 345,
    marginBottom: "25px",
  },
  icon: {
    width: 100,
    height: 75,
    color: "primary.main",
  },
};

export default UsersList;

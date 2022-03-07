import React from "react";
import SideBar from "./sideBar";
import styled from "styled-components";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <SideBar />
      <OuterBox>
        <BodyContainer>
          <ContentBox>{children}</ContentBox>
        </BodyContainer>
      </OuterBox>
    </>
  );
};

const BodyContainer = styled.div`
  width: 80%;
  min-height: 85vh;
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 2%;
  padding-bottom: 5%;
  display: flex;
  justify-content: center;
`;

const ContentBox = styled.div`
  width: 90%;
  height: fit-content;
  padding: 2%;
  border-radius: 50px;
`;

const OuterBox = styled.div`
  margin-left: 250px;
`;
export default DashboardLayout;

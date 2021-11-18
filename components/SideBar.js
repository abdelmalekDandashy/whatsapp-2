import React from "react";
import styled from "styled-components";
import { Avatar, Button, IconButton } from "@material-ui/core";
import MoreVert from "@material-ui/icons/MoreVert";
import Chat from "@material-ui/icons/Chat";
import Search from "@material-ui/icons/Search";
import * as EmailValidator from "email-validator";

const Sidebar = () => {
  const createChat = () => {
    const input = prompt("Enter Email");
    if (!input) return null;
    if (EMailValidator.validate(input)) {
      // add chat to db of chats
    }
  };
  return (
    <Container>
      <Header>
        <UserAvatar />
        <IconContainer>
          <IconButton>
            <Chat />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </IconContainer>
      </Header>
      <Searchdiv>
        <Search />
        <SearchInput placeholder="Search in chats" />
      </Searchdiv>
      <SideBarButton onClick={createChat}>start a new chat</SideBarButton>
      {/* list of chats */}
    </Container>
  );
};

export default Sidebar;
const Container = styled.div``;
const Header = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  height: 80px;
  border-bottom: 1px solid whitesmoke;
`;
const UserAvatar = styled(Avatar)`
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;
const IconContainer = styled.div``;

const Searchdiv = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 2px;
`;
const SearchInput = styled.input`
  outline-width: 0;
  border: none;
  flex: 1;
`;
const SideBarButton = styled(Button)`
  width: 100%;
  &&& {
    border-top: 1px solid whitesmoke;
    border-bottom: 1px solid whitesmoke;
  }
`;

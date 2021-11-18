import React from "react";
import styled from "styled-components";
import { Avatar, Button, IconButton } from "@material-ui/core";
import MoreVert from "@material-ui/icons/MoreVert";
import Chat from "@material-ui/icons/Chat";
import Search from "@material-ui/icons/Search";
import * as EmailValidator from "email-validator";
import { db, auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";

const Sidebar = () => {
  const [user] = useAuthState(auth);
  const createChat = () => {
    const input = prompt("Enter Email");
    if (!input) return null;
    if (EmailValidator.validate(input) && input !== user.email) {
      // at hr 1:33:20 check if input email already exists
      const chatsRef = addDoc(collection(db, "chats"), {
        user: [user.email, input],
      });
      alert("chat added");
    } else {
      alert("error");
    }
  };
  return (
    <Container>
      <Header>
        <UserAvatar
          src={user.photoURL ? user.photoURL : null}
          onClick={() => auth.signOut()}
        />
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

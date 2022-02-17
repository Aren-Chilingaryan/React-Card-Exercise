import React from "react";
import styled from "styled-components";
import Button from "./button";

const HeaderContainer = styled.div`
  padding: 5px 0px 10px 10px;
  background: #b88383;
  width: 100%;
  height: 60px;
  top: 0;
  overflow: hidden;
  position: fixed;
`;
interface HeaderProps {
  sortCards: () => void;
  addCard: () => void;
}

const Header: React.FC<HeaderProps> = ({ sortCards, addCard }) => {
  return (
    <HeaderContainer>
      <Button text="Add Card" color="#3a99be" onClick={addCard}></Button>
      <Button text="Sort Cards" color="#3a99be" onClick={sortCards}></Button>
    </HeaderContainer>
  );
};

export default Header;

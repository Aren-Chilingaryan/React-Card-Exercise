import React from "react";
import styled from "styled-components";
import { CloseOutlined } from "@ant-design/icons";

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #000000;
  width: 160px;
  height: 90px;
  margin: 60px;
  background-color: #a4a4dd;
`;
const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #000000;
  position: relative;
  bottom: 35px;
  left: 75px;
  background-color: #e97b7b;
`;

interface CardProps {
  number: React.ReactNode;
  deleteCard: () => void;
}

const SingleCard: React.FC<CardProps> = ({ number, deleteCard }) => {
  return (
    <CardContainer>
      <IconContainer>
        <CloseOutlined onClick={deleteCard} />
      </IconContainer>
      {number}
    </CardContainer>
  );
};

export default SingleCard;

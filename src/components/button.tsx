import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.button`
  margin: 10px;
  border: 1px solid black;
  height: 30px;
  width: 100px;
`;

interface ButtonProps {
  text?: React.ReactNode;
  color: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, color, onClick }) => {
  return (
    <ButtonContainer
      style={{
        backgroundColor: color,
      }}
      onClick={onClick}
    >
      {text}
    </ButtonContainer>
  );
};

export default Button;

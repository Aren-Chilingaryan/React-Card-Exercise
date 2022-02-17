import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  position: fixed;
  padding: 10px 10px 0px 10px;
  bottom: 0;
  width: 100%;
  height: 40px;
  background: #533232;
`;

interface FooterProps {
  children?: React.ReactNode;
}

const Footer: React.FC<FooterProps> = ({ children }) => {
  return <FooterContainer>{children}</FooterContainer>;
};

export default Footer;

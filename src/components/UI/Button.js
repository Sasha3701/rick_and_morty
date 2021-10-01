import React from "react";
import styled from "styled-components";

const SytledButton = styled.button`
  margin: 0;
  padding: 5px 10px;
  border: none;
  box-sizing: border-box;
  box-shadow: 0px 0px 1px 1px gray;
  border-radius: 8px;
  width: 100px;
  font-size: 14px;
  background-color: rgb(59, 166, 255);
  color: white;
  &:hover {
    background-color: rgb(0, 120, 255);
  }
  &:active {
    background-color: rgb(0, 100, 255);
  }
  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px 2px gray;
  }
`;

const Button = ({ children, theme = "default", type = "button", ...props }) => {
  return (
    <SytledButton type={type} theme={theme} {...props}>
      {children}
    </SytledButton>
  );
};

export default Button;

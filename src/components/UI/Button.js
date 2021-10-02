import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
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

const StyledButtonLink = styled.button`
  margin: 0;
  padding: 5px;
  border: none;
  box-sizing: border-box;
  font-size: ${({ active }) => active ? "24px" : "16px"};
  font-weight: ${({ active }) => active ? "900" : "400"};
  background-color: transparent;
  color: black;
  cursor: pointer;
  &:hover {
    color: rgb(59, 255, 109);
  }
  &:focus {
    outline: none;
    color: rgb(59, 255, 109);
  }
  &:disabled {
    color: gray;
    cursor: not-allowed;
  }
`;

const Button = ({ children, theme = "default", type = "button", ...props }) => {
  if (theme === "button-link") {
    return (
      <StyledButtonLink type={type} {...props}>
        {children}
      </StyledButtonLink>
    );
  }
  return (
    <StyledButton type={type} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;

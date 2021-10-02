import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  margin: 0;
  padding: 5px;
  border: none;
  box-sizing: border-box;
  box-shadow: 1px 1px 10px 2px lightgray;
  border-radius: 8px;
  width: 100%;
  font-size: 14px;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px 2px gray;
  }
`;
const StyledLabel = styled.label`
  margin: 0;
  padding: 0;
  margin-right: 5px;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 5px;
  flex: 1;
`;

const Input = ({ label, name, ...props }) => {
  return (
    <Container>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <StyledInput type="text" name={name} id={name} {...props} />
    </Container>
  );
};

export default Input;

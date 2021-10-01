import React from "react";
import styled from "styled-components";

const StyledSelect = styled.select`
  background-color: white;
  border: none;
  padding: 5px;
  border-radius: 8px;
  box-shadow: 1px 1px 10px 2px lightgray;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px 2px gray;
  }
`;

const StyledOption = styled.option``;

const StyledLabel = styled.label`
  margin: 0;
  padding: 0;
  margin-right: 5px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 5px;
`;

const Select = ({ name, options, label, ...props }) => {
  return (
    <Container>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <StyledSelect id={name} name={name} {...props}>
        {options.map(({ id, label, value }) => (
          <StyledOption key={id} value={value}>
            {label}
          </StyledOption>
        ))}
      </StyledSelect>
    </Container>
  );
};

export default Select;

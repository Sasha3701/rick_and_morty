import React from "react";
import styled, { keyframes } from "styled-components";
import { Button } from "../UI";

const animContainer = keyframes`
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
`;

const Warning = styled.p`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  width: 500px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  box-sizing: border-box;
  box-shadow: 0px 0px 10px 2px lightgray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background-color: rgba(47, 44, 45, 0.34);
  border-radius: 8px;
  opacity: 1;
  animation: ${animContainer} 0.4s ease;
`;

const CloseButton = styled(Button)`
  margin: 20px;
`;

const ErrorSearch = ({ text, onClose }) => {
  return (
    <Container onClick={onClose}>
      <Warning>
        {text}
        <CloseButton>Try again...</CloseButton>
      </Warning>
    </Container>
  );
};

export default ErrorSearch;

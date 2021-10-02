import React from "react";
import styled, { keyframes } from "styled-components";
import { iconClose, iconOpen } from "../../images";

const animContent = keyframes`
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  animation: ${animContent} 1s ease-in-out;
`;
const ToggleButton = styled.button`
  background-color: transparent;
  padding: 5px;
  border: none;
  box-sizing: border-box;
  box-shadow: none;
  &:hover {
    & img {
      transform: scale(1.4);
    }
  }
`;

const Img = styled.img`
  margin: 0;
  padding: 0;
  width: 30px;
  height: 30px;
  transition: all 0.2s ease-in-out;
`;

const Container = styled.div`
  width: ${({ show }) => (show ? "1000px" : "0px")};
  opacity: ${({ show }) => (show ? "1" : "0")};
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
  box-shadow: 0px 0px 10px 10px lightgray;
  transition: opacity 0.4s ease-in-out;
  border-radius: 8px;
  position: absolute;
  ${({ open }) => {
    switch (open) {
      case "bottom-left":
        return "top: 55px; left: 0px;";
      case "bottom-right":
        return "top: 55px; right: 0px;";
      case "top-left":
        return "bottom: 55px; left: 0px;";
      case "top-right":
        return "bottom: 55px; right: 0px;";
      default :
        return "top: 55px; left: 0px;";
    }
  }}
`;

const Wrapper = styled.div`
  display: inline-block;
  position: absolute;
  margin: 0;
  padding: 0;
`;

const WidgetContainer = ({ children, open, show, handleOpenClose }) => {
  return (
    <Wrapper>
      <ToggleButton show={show} onClick={handleOpenClose}>
        <Img
          show={show}
          src={`.${show ? iconClose : iconOpen}`}
          alt="toggle-image"
        />
      </ToggleButton>
      <Container open={open} show={show}>
        {show ? <Content show={show}>{children}</Content> : null}
      </Container>
    </Wrapper>
  );
};

export default WidgetContainer;

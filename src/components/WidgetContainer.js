import React, { useState } from "react";
import styled from "styled-components";
import { iconTriangle } from '../images'
import 'regenerator-runtime/runtime'

const Container = styled.div`
  position: relative;
  height: 575px;
  overflow: hidden;
`;
const ToggleButton = styled.button`
  margin: 0;
  padding: 5px;
  width: ${({ position }) => {
    const result =
      position === "bottom" || position === "top" ? "75px" : "25px";
    return result;
  }};
  height: ${({ position }) => {
    const result =
      position === "left" || position === "right" ? "75px" : "25px";
    return result;
  }};
  border-radius: ${({ position }) => {
    switch (position) {
      case "left":
        return "0px 6px 6px 0px";
      case "right":
        return "6px 0px 0px 6px";
      case "bottom":
        return "6px 6px 0px 0px";
      default:
        return "0px 0px 6px 6px";
    }
  }};
  border: none;
  box-sizing: border-box;
  box-shadow: 0px 0px 2px 1px gray;
  background: rgb(255, 255, 255);
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 1) 2%,
    rgba(96, 252, 70, 1) 41%,
    rgba(255, 255, 255, 1) 53%,
    rgba(96, 252, 70, 1) 97%
  );
  position: absolute;
  top: ${({ show }) => (show ? "500px" : "0px")};
  transition: top 0.4s ease;
`;

const Img = styled.img`
  transform: rotate(${({ show }) => (show ? "180deg" : "0deg")});
  margin: 0;
  padding: 0;
  width: 15px;
  height: 15px;
  transition: transform 0.4s ease;
`;

const Content = styled.div`
  position: relative;
  top: ${({ show }) => (show ? "0" : "-500px")};
  background-color: green;
  transition: all 0.4s ease;
  width: 500px;
  height: 500px;
  transition: top 0.4s ease;
`;

const WidgetContainer = ({ children, position, positionOpen }) => {
  const [show, setShow] = useState(false);

  const handleOpenClose = () => {
    setShow((prevState) => !prevState);
  };

  return (
    <Container>
      <ToggleButton show={show} position={position} onClick={handleOpenClose}>
        <Img
          show={show}
          position={position}
          src={`.${iconTriangle}`}
          alt="toggle-image"
        />
      </ToggleButton>
      <Content show={show}>{children}</Content>
    </Container>
  );
};

export default WidgetContainer;
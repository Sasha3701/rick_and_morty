import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import "regenerator-runtime/runtime";

// Api
import api from "../../api";

// Components
import { Button } from "../UI";

// Images
import { iconClose } from "../../images";

const animContainer = keyframes`
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
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

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  padding: 60px;
  border-radius: 8px;
  box-sizing: border-box;
  box-shadow: 0px 0px 10px 2px lightgray;
  background-color: white;
`;

const Avatar = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px 1px black;
  margin-bottom: 20px;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
`;
const Name = styled.p`
  margin: 0;
  margin-bottom: 10px;
  padding: 0;
  font-size: 18px;
`;

const Label = styled.span`
  text-decoration: underline;
  font-weight: 900;
  font-size: 14px;
`;
const Img = styled.img`
  margin: 0;
  padding: 0;
  width: 30px;
  height: 30px;
  transition: all 0.2s ease-in-out;
`;

const CloseButton = styled(Button)`
  position: absolute;
  top: 5px;
  right: 5px;
`;

const Status = styled(Name)``;
const Gender = styled(Name)``;
const Species = styled(Name)``;

const CardCharacter = ({ id, onClose }) => {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    api.getCharacter(id).then((res) => {
      setInfo(res);
    });
  }, [id]);

  return (
    <Container onClick={onClose}>
      {info ? (
        <Card>
          <Avatar src={info.image} alt="avatar" />
          <Description>
            <Name>
              <Label>Name:</Label> {info.name}
            </Name>
            <Status>
              <Label>Status:</Label> {info.status}
            </Status>
            <Gender>
              <Label>Gender:</Label> {info.gender}
            </Gender>
            <Species>
              <Label>Species:</Label> {info.species}
            </Species>
          </Description>
          <CloseButton theme="button-link" onClick={onClose}>
            <Img src={`.${iconClose}`} alt="close" />
          </CloseButton>
        </Card>
      ) : null}
    </Container>
  );
};

export default CardCharacter;

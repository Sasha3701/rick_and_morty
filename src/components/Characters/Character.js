import React from "react";
import styled, { keyframes } from "styled-components";

const animItem = keyframes`
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
`;

const CharacterItem = styled.div`
  display: flex;
  align-items: center;
  box-shadow: 0px 0px 2px 1px lightgray;
  border-radius: 8px;
  box-sizing: border-box;
  width: 250px;
  animation: ${animItem} 2s ease;
`;
const Name = styled.p`
  margin: 0;
  padding: 0;
  font-weight: 900;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
  border-radius: 8px 0px 0px 8px;
`;

const Character = ({ character }) => {
  const { name, image } = character;

  return (
    <CharacterItem>
      <Avatar src={image} alt="avatar" />
      <Name>{name}</Name>
    </CharacterItem>
  );
};

export default Character;

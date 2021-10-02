import React from "react";
import styled from "styled-components";

// Components
import Character from "./Character";

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 440px;
  margin: 10px 0px 0px 0;
  padding: 0;
`;

const Item = styled.li`
  margin: 6px;
  padding: 0;
`;

const ListCharacters = ({ characters }) => {

  return (
    <List>
      {characters.map((character) => (
        <Item key={character.id}>
          <Character character={character} />
        </Item>
      ))}
    </List>
  );
};

export default ListCharacters;

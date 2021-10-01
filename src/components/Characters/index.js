import React from "react";
import styled from "styled-components";

// Components
import Character from "./Character";

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 525px;
  height: 650px;
  margin: 0;
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

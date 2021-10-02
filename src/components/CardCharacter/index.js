import React, { useEffect, useState } from "react";
import styled from "styled-components";
import api from "../../api";

const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background-color: rgba(47, 44, 45, 0.34);
  border-radius: 8px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
`;

const Avatar = styled.img`
  width: 20px;
  height: 20px;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
`;
const Name = styled.div``;

const Status = styled(Name);
const Gender = styled(Name);
const Species = styled(Name);

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
          <Avatar>{info.image}</Avatar>
          <Description>
            <Name>{info.name}</Name>
            <Status>{info.status}</Status>
            <Gender>{info.gender}</Gender>
            <Species>{info.species}</Species>
          </Description>
        </Card>
      ) : null}
    </Container>
  );
};

export default CardCharacter;

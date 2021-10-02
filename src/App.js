import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "regenerator-runtime/runtime";

// Components
import Characters from "./components/Characters";
import FilterBlock from "./components/FilterBlock";
import Pagination from "./components/Pagination";
import WidgetContainer from "./components/WidgetContainer";
import CardCharacter from "./components/CardCharacter";
import { ErrorConnect } from "./components/ErrorComponents";

// Api
import api from "./api";

// Actions
import { save } from "./store/charactersSlice";
import { save as savePag } from "./store/paginationSlice";

const App = ({ domElemet }) => {
  const [error, setError] = useState(false);
  const [show, setShow] = useState(false);
  const [card, setCard] = useState(false);
  const [cardId, setCardId] = useState(null);
  const characters = useSelector((state) => state.characters.value);
  const { pages } = useSelector((state) => state.pagination);
  const dispatch = useDispatch();

  const variantOpen = domElemet.getAttribute("data-open");

  const handleOpenClose = () => {
    if (characters.length === 0) {
      api
        .getAll()
        .then((res) => {
          const { results, info } = res;
          dispatch(save(results));
          dispatch(savePag(info));
        })
        .catch((e) => {
          setError(e);
        });
    }
    setShow((prevState) => !prevState);
  };

  const handleOpenCard = (id) => {
    setCardId(id);
    setCard(true);
  };

  const handleCloseCard = () => {
    setCardId(null);
    setCard(false);
  };

  return (
    <WidgetContainer
      show={show}
      open={variantOpen}
      handleOpenClose={handleOpenClose}
    >
      <FilterBlock />
      {characters.length !== 0 ? (
        <>
          <Characters onOpenChar={handleOpenCard} characters={characters} />
          {pages > 1 ? <Pagination /> : null}
          {card ? (
            <CardCharacter onClose={handleCloseCard} id={cardId} />
          ) : null}
        </>
      ) : error ? (
        <ErrorConnect />
      ) : null}
    </WidgetContainer>
  );
};

export default App;

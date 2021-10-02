import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "regenerator-runtime/runtime";

// Components
import Characters from "./components/Characters";
import FilterBlock from "./components/FilterBlock";
import Pagination from "./components/Pagination";
import WidgetContainer from "./components/WidgetContainer";

// Api
import api from "./api";

// Actions
import { save } from "./store/charactersSlice";
import { save as savePag } from "./store/paginationSlice";

const App = ({ domElemet }) => {
  const [show, setShow] = useState(false);
  const characters = useSelector((state) => state.characters.value);
  const { pages } = useSelector((state) => state.pagination);
  const dispatch = useDispatch();

  const variantOpen = domElemet.getAttribute("data-open")

  const handleOpenClose = () => {
    if (characters.length === 0) {
      api.getAll().then((res) => {
        const { results, info } = res;
        dispatch(save(results));
        dispatch(savePag(info));
      });
    }
    setShow((prevState) => !prevState);
  };

  return (
    <WidgetContainer show={show} open={variantOpen} handleOpenClose={handleOpenClose}>
      <FilterBlock />
      <Characters characters={characters} />
      {pages > 1 ? <Pagination /> : null}
    </WidgetContainer>
  );
};

export default App;

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "regenerator-runtime/runtime";

// Components
import Characters from "./components/Characters";
import FilterBlock from "./components/FilterBlock";
import Pagination from "./components/Pagination";

// Api
import api from "./api";

// Actions
import { save } from "./store/charactersSlice";
import { save as savePag } from "./store/paginationSlice";

const App = () => {
  const [show, setShow] = useState(false);
  const characters = useSelector((state) => state.characters.value);
  const { pages } = useSelector((state) => state.pagination);
  const dispatch = useDispatch();

  const handleOpen = () => {
    if (characters.length === 0) {
      api.getAll().then((res) => {
        const { results, info } = res;
        dispatch(save(results));
        dispatch(savePag(info));
      });
    }
    setShow((prevState) => !prevState);
  };

  // return <WidgetContainer position="top" show={show} handleOpenClose={handleOpenClose}>{show ? "asdas" : null}</WidgetContainer>
  return (
    <>
      {show ? (
        <>
          <FilterBlock />
          <Characters characters={characters} />
          {pages > 1 ? <Pagination /> : null}
        </>
      ) : null}
      <button onClick={handleOpen}>Fetch</button>
    </>
  );
};

export default App;

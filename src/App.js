import React, { useState } from "react";
import "regenerator-runtime/runtime";

// Components
import Characters from "./components/Characters";
import FilterBlock from "./components/FilterBlock";

// Api
import api from "./api";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { save } from "./store/charactersSlice";

const App = () => {
  const [show, setShow] = useState(false);
  const characters = useSelector((state) => state.characters.value);
  const dispatch = useDispatch();

  const handleOpen = () => {
    if (characters.length === 0) {
      api.getAll().then((res) => {
        const { results } = res;
        dispatch(save(results));
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
        </>
      ) : null}
      <button onClick={handleOpen}>Fetch</button>
    </>
  );
};

export default App;

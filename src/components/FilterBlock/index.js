import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { save } from "../../store/charactersSlice";
import api from "../../api";

const FilterBlock = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [status, setStatus] = useState("alive");
  const [type, setType] = useState("");
  const [gender, setGender] = useState("male");
  const [species, setSpecies] = useState("");

  console.log(name);

  const handleChangeInputs = (e) => {
    const value = e.target.value;
    const action = {
      name: setName,
      type: setType,
      species: setSpecies,
    };
    action[e.target.name](value);
  };

  const handleSearch = () => {
    api
      .getCharacterByFilter({ name, type, gender, species, status })
      .then((res) => {
        const { results } = res;
        dispatch(save(results));
      })
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <input name="name" value={name} onChange={(e) => handleChangeInputs(e)} />
      <input name="type" value={type} onChange={(e) => handleChangeInputs(e)} />
      <input
        name="species"
        value={species}
        onChange={(e) => handleChangeInputs(e)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default FilterBlock;

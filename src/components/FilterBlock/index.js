import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import "regenerator-runtime/runtime";

// Components
import { Button, Input, Select } from "../UI";

// Utils
import { comparisonParams, createQueryString } from "../../utils";

// Api
import api from "../../api";

// Actions
import { save } from "../../store/charactersSlice";
import { save as savePag, addQueryString } from "../../store/paginationSlice";
import { ErrorSearch } from "../ErrorComponents";

const inputs = [
  {
    id: 0,
    label: "Name:",
    name: "name",
    placeholder: "Empty...",
  },
  {
    id: 1,
    label: "Species:",
    name: "species",
    placeholder: "Empty...",
  },
  {
    id: 2,
    label: "Type:",
    name: "type",
    placeholder: "Empty...",
  },
];

const selects = [
  {
    id: 0,
    name: "status",
    label: "Status:",
    options: [
      {
        id: 0,
        label: "Alive",
        value: "alive",
      },
      {
        id: 1,
        label: "Dead",
        value: "dead",
      },
      {
        id: 2,
        label: "Unknown",
        value: "unknown",
      },
      {
        id: 3,
        label: "-",
        value: "",
      },
    ],
  },
  {
    id: 1,
    name: "gender",
    label: "Gender:",
    options: [
      {
        id: 0,
        label: "Female",
        value: "female",
      },
      {
        id: 1,
        label: "Male",
        value: "male",
      },
      {
        id: 2,
        label: "Genderless",
        value: "genderless",
      },
      {
        id: 3,
        label: "Unknown",
        value: "unknown",
      },
      {
        id: 4,
        label: "-",
        value: "",
      },
    ],
  },
];

const Container = styled.div`
  background-color: rgb(59, 255, 109);
  height: 100px;
  padding: 5px;
  width: 100%;
  box-sizing: border-box;
  border-radius: 8px 8px 0px 0px;
`;

const Inputs = styled.div`
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px;
`;

const SelectsAndButton = styled.div`
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px;
`;

const GroupButtons = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 30px;
  padding: 0;
  list-style: none;
`;
const WrapperButton = styled.li`
  margin: 0px 10px;
  padding: 0;
`;

const FilterBlock = () => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [search, setSearch] = useState({ name: "", species: "", type: "" });
  const [select, setSelect] = useState({ status: "", gender: "" });
  const [lastParams, setLastParams] = useState({
    name: "",
    species: "",
    type: "",
    status: "",
    gender: "",
  });
  const dispatch = useDispatch();

  const handleChangeInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setSearch((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleChangeSelects = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setSelect((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleCloseError = () => {
    setError(false);
    setErrorMessage("");
  };

  const handleFilterParams = async () => {
    const data = { ...search, ...select };
    const isEqual = comparisonParams(lastParams, data);
    if (isEqual) {
      const queryString = createQueryString(data);
      api
        .getCharacterByFilter(queryString)
        .then((res) => {
          const { info, results } = res;
          dispatch(save(results));
          dispatch(savePag(info));
          dispatch(addQueryString(queryString));
          setLastParams(data);
        })
        .catch((e) => {
          if (e?.response?.data?.error) {
            setErrorMessage(e.response.data.error);
          } else {
            setErrorMessage(e.message);
          }
          setError(true);
        });
    }
  };

  const handleClearFilterParams = async () => {
    const { name, type, species } = search;
    const { status, gender } = select;
    if (name !== "" || species !== "" || type !== "") {
      setSearch({ name: "", species: "", type: "" });
    }
    if (status !== "" || gender !== "") {
      setSelect({ status: "", gender: "" });
    }
    const isAllEmpty = Object.values(lastParams).every((item) => item === "");
    if (!isAllEmpty) {
      api.getAll().then((res) => {
        const { info, results } = res;
        dispatch(save(results));
        dispatch(savePag(info));
        dispatch(addQueryString(""));
        setLastParams({
          name: "",
          species: "",
          type: "",
          status: "",
          gender: "",
        });
      }).catch(e => {
        setErrorMessage(e.message);
        setError(true);
      })
    }
  };

  return (
    <>
      <Container>
        <Inputs>
          {inputs.map(({ id, name, ...rest }) => (
            <Input
              key={id}
              value={search[name]}
              name={name}
              onChange={(e) => handleChangeInputs(e)}
              {...rest}
            />
          ))}
        </Inputs>
        <SelectsAndButton>
          {selects.map(({ id, name, ...rest }) => (
            <Select
              key={id}
              value={select[name]}
              name={name}
              onChange={(e) => handleChangeSelects(e)}
              {...rest}
            />
          ))}
          <GroupButtons>
            <WrapperButton>
              <Button onClick={handleFilterParams}>Show</Button>
            </WrapperButton>
            <WrapperButton>
              <Button onClick={handleClearFilterParams}>Clear</Button>
            </WrapperButton>
          </GroupButtons>
        </SelectsAndButton>
      </Container>
      {error ? (
        <ErrorSearch text={errorMessage} onClose={handleCloseError} />
      ) : null}
    </>
  );
};

export default FilterBlock;

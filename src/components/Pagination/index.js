import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import "regenerator-runtime/runtime";

// Actions
import { change } from "../../store/paginationSlice";
import { save } from "../../store/charactersSlice";

// Components
import { Button } from "../UI";
import { ErrorSearch } from "../ErrorComponents";

// Api
import api from "../../api";

// Utils
import { createArrPages } from "../../utils";

// Images
import { iconNext, iconPrev } from "../../images";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  padding: 0;
  width: 100%;
`;

const Img = styled.img`
  width: 10px;
  height: 10px;
  margin: 0;
  padding: 0;
`;

const Pagination = () => {
  const { next, prev, pages, currentPage, queryString } = useSelector(
    (state) => state.pagination
  );
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChangePage = (e) => {
    const value = +e.target.value;
    api
      .getCharacterByPage(value, queryString)
      .then((res) => {
        const { info, results } = res;
        dispatch(change({ ...info, currentPage: value }));
        dispatch(save(results));
      })
      .catch((e) => {
        setErrorMessage(e.message);
      });
  };

  const handlePrev = () => {
    const value = currentPage - 1;
    api
      .getCharacterByPage(value, queryString)
      .then((res) => {
        const { info, results } = res;
        dispatch(change({ ...info, currentPage: value }));
        dispatch(save(results));
      })
      .catch((e) => {
        setErrorMessage(e.message);
      });
  };

  const handleNext = () => {
    const value = currentPage + 1;
    api
      .getCharacterByPage(value, queryString)
      .then((res) => {
        const { info, results } = res;
        dispatch(change({ ...info, currentPage: value }));
        dispatch(save(results));
      })
      .catch((e) => {
        setErrorMessage(e.message);
      });
  };

  const handleCloseError = () => {
    setError(false);
    setErrorMessage("");
  };

  const arrPages = createArrPages(pages, currentPage);

  return (
    <>
      <Container>
        <Button theme="button-link" onClick={handlePrev} disabled={!prev}>
          <Img src={`.${iconPrev}`} alt="prev" />
        </Button>
        {currentPage > 3 ? (
          <>
            <Button
              theme="button-link"
              value={1}
              onClick={(e) => handleChangePage(e)}
            >
              1
            </Button>
            {"..."}
          </>
        ) : null}
        {arrPages.map((num) => (
          <Button
            value={num}
            theme="button-link"
            key={num}
            active={currentPage === num}
            onClick={(e) => handleChangePage(e)}
            disabled={currentPage === num}
          >
            {num}
          </Button>
        ))}
        {currentPage <= pages - 3 ? (
          <>
            {"..."}
            <Button
              theme="button-link"
              value={pages}
              onClick={(e) => handleChangePage(e)}
            >
              {pages}
            </Button>
          </>
        ) : null}
        <Button theme="button-link" onClick={handleNext} disabled={!next}>
          <Img src={`.${iconNext}`} alt="next" />
        </Button>
      </Container>
      {error ? (
        <ErrorSearch text={errorMessage} onClose={handleCloseError} />
      ) : null}
    </>
  );
};

export default Pagination;

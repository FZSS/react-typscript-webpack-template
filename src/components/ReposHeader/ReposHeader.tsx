import * as React from 'react';
import { FunctionComponent, useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { debounce } from 'lodash';
import 'components/ReposHeader/styles.css';
import { fetchRepos } from 'store/repos/slice';
import { RootState } from '../../store/store';

// invoke the api at most every 0.5 second
const DEBOUNCE_INTERVAL = 500;

const ReposHeader: FunctionComponent = () => {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [keyword, setKeyword] = useState<string | undefined>(undefined);

  const dispatch = useDispatch();
  const loading = useSelector((state: RootState) => state.repos.loading);
  const hasNextPage = useSelector(
    (state: RootState) => state.repos.hasNextPage
  );

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(fetchRepos(event.target.value));
    // reset keyword and page number states
    setKeyword(event.target.value);
    setPageNumber(1);
  };

  const handleNext = () => {
    if (keyword) {
      dispatch(fetchRepos(keyword, pageNumber + 1));
      setPageNumber(pageNumber + 1);
    }
  };

  const handlePrevious = () => {
    if (keyword) {
      dispatch(fetchRepos(keyword, pageNumber - 1));
      setPageNumber(pageNumber - 1);
    }
  };

  // use debounce to reduce calls
  const debounceHandleInput = debounce(handleInput, DEBOUNCE_INTERVAL);

  // next button is disabled if there is not next page, loading, or empty keyword
  const nextDisabled = !hasNextPage || loading || !keyword;

  // prev button is disabled if it is first page, loading, or empty keyword
  const prevDisabled = loading || pageNumber === 1 || !keyword;

  return (
    <div className="repos-header">
      <TextField
        disabled={loading}
        fullWidth
        label="Keyword"
        onChange={debounceHandleInput}
      />
      <div className="repos-header-buttons">
        <div className="repos-header-button">
          <Button
            variant="contained"
            onClick={handlePrevious}
            disabled={prevDisabled}
          >
            Previous
          </Button>
        </div>
        <div className="repos-header-button">
          <Button
            variant="contained"
            onClick={handleNext}
            disabled={nextDisabled}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ReposHeader;

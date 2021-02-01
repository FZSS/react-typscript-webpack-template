import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState, Repo } from 'store/repos/state';
import { AppThunk } from 'store/store';
import { getRepos, PAGE_SIZE } from 'api/githubApi';

const reposSlice = createSlice({
  name: 'repos',
  initialState,
  reducers: {
    fetchReposPending(state) {
      state.loading = true;
      state.repos = [];
      state.error = null;
      state.hasNextPage = true;
    },
    fetchReposFailed(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    fetchReposFulfilled(state, action: PayloadAction<Repo[]>) {
      state.loading = false;
      state.repos = action.payload;
      // if last payload has less than 10 repos, there is no more pages
      state.hasNextPage = action.payload.length == PAGE_SIZE;
    },
  },
});

const {
  fetchReposFulfilled,
  fetchReposFailed,
  fetchReposPending,
} = reposSlice.actions;

export const fetchRepos = (
  keyword: string,
  pageNumber: number = 1
): AppThunk => async (dispatch) => {
  try {
    dispatch(fetchReposPending());
    const repos = await getRepos(keyword, pageNumber);
    dispatch(fetchReposFulfilled(repos));
  } catch (error) {
    dispatch(fetchReposFailed(error.message));
  }
};

export default reposSlice.reducer;

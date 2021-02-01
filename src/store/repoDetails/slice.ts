import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from 'store/repoDetails/state';
import { AppThunk } from 'store/store';
import { getCommits, getLastForkInfo, PAGE_SIZE } from 'api/githubApi';
import { getCommitsUrl, getForksUrl } from 'utils/urlUtils';

const repoDetailsSlice = createSlice({
  name: 'repoDetails',
  initialState,
  reducers: {
    toggleRepoDetailsModal(state, action: PayloadAction<boolean>) {
      state.modalOpen = action.payload;
    },
    fetchRepoDetailsPending(state) {
      state.error = null;
      state.lastCommitters = [];
      state.lastForkOwner = null;
      state.loading = true;
    },
    fetchRepoDetailsFailed(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    fetchRepoDetailsFulfilled(
      state,
      action: PayloadAction<[string[], string | null, string | null]>
    ) {
      state.loading = false;
      const [committers, lastForkOwner, lastForkOwnerBio] = action.payload;
      state.lastCommitters = committers;
      state.lastForkOwner = lastForkOwner;
      state.lastForkOwnerBio = lastForkOwnerBio;
    },
  },
});

const {
  fetchRepoDetailsPending,
  fetchRepoDetailsFailed,
  fetchRepoDetailsFulfilled,
} = repoDetailsSlice.actions;

export const fetchRepoDetails = (shortName: string): AppThunk => async (
  dispatch
) => {
  try {
    dispatch(fetchRepoDetailsPending());
    const committers = await getCommits(getCommitsUrl(shortName));
    const [lastForkOwner, lastForkOwnerBio] = await getLastForkInfo(
      getForksUrl(shortName)
    );

    dispatch(
      fetchRepoDetailsFulfilled([committers, lastForkOwner, lastForkOwnerBio])
    );
  } catch (error) {
    dispatch(fetchRepoDetailsFailed(error.message));
  }
};

export const toggleRepoDetailsModal =
  repoDetailsSlice.actions.toggleRepoDetailsModal;

export default repoDetailsSlice.reducer;

export interface DetailsState {
  loading: boolean;
  modalOpen: boolean;
  lastForkOwner: string | null;
  lastForkOwnerBio: string | null;
  lastCommitters: string[];
  error: string | null;
}

export const initialState: DetailsState = {
  loading: false,
  modalOpen: false,
  lastForkOwner: null,
  lastForkOwnerBio: null,
  lastCommitters: [],
  error: null,
};

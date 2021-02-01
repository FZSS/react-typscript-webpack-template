export interface Repo {
  name: string;
  owner: string;
  stars: number;
  url: string;
}

export interface ReposState {
  repos: Repo[];
  loading: boolean;
  error: string | null;
  hasNextPage: boolean;
}

export const initialState: ReposState = {
  repos: [],
  loading: false,
  error: null,
  hasNextPage: true,
};

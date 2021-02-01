import { configureStore, Action } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { ThunkAction } from 'redux-thunk';
import reposReducer from 'store/repos/slice';
import repoDetailsReducer from 'store/repoDetails/slice';

const rootReducer = combineReducers({
  repos: reposReducer,
  repoDetails: repoDetailsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

const store = configureStore({
  reducer: rootReducer,
});

export default store;

import { createSlice } from '@reduxjs/toolkit';
import anecService from '../services/anecdotes';

const _ = require('lodash');

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    appendPost(state, action) {
      state.push(action.payload);
    },
    setPosts(state, action) {
      const sortState = _.orderBy(action.payload, ['votes'], ['desc'])
      return sortState;
    },
    updateVotes(state, action) {
      const update = state.map((obj) =>
        obj.id === action.payload.id ? action.payload : obj
      );
      const sortState = _.orderBy(update, ['votes'], ['desc']);
      return sortState;
    },
  },
});

export const { createAnnec, vote, appendPost, setPosts, updateVotes } =
  anecdoteSlice.actions;

export const initAnec = () => {
  return async (dispatch) => {
    const anecdotes = await anecService.getAll();
    dispatch(setPosts(anecdotes));
  };
};

export const createPost = (content) => {
  return async (dispatch) => {
    const newPost = await anecService.createNew(content);
    dispatch(appendPost(newPost));
  };
};

export const updVote = (object) => {
  return async (dispatch) => {
    const updated = await anecService.update(object);
    dispatch(updateVotes(updated));
  };
};

export default anecdoteSlice.reducer;

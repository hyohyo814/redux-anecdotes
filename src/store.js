import { configureStore } from '@reduxjs/toolkit';
import anecdoteReducer, { setPosts } from './reducers/anecdoteReducer';
import filterReducer from './reducers/filterReducer';
import notifReducer from './reducers/notificationReducer'

export const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducer,
    filter: filterReducer,
    notification: notifReducer
  },
});


import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { app } from 'chunks/app';

export const reducers = history =>
  combineReducers({
    app: app.reducer,
    router: connectRouter(history),
  });

import { fork, all } from 'redux-saga/effects';

import { saga as app } from 'chunks/app';

export function* sagas() {
  yield all([fork(app)]);
}

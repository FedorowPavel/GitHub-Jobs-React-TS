import { takeLatest } from 'redux-saga/effects'
import { jobsActions } from '../jobsSlice'
import { handlerFetchJobs } from './handlerFetchJobs'

export function* watcherSaga() {
  // eslint-disable-next-line no-console
  yield takeLatest(jobsActions.fetchJobs, handlerFetchJobs)
}

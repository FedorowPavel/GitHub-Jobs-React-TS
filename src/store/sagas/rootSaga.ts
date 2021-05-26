import { takeLatest, call, put } from 'redux-saga/effects'
import { jobsActions } from '../jobsSlice'
import { requestJobs } from './requestJobs'

export function* handlerFetchJobs() {
  // @ts-ignore
  const res = yield call(requestJobs)
  yield put(jobsActions.setJobs(res))
}

export function* watcherSaga() {
  yield takeLatest(jobsActions.fetchJobs, handlerFetchJobs)
}

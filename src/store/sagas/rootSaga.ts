import { takeLatest, call, put } from 'redux-saga/effects'
import { jobsActions } from '../jobsSlice'
import { requestJobs } from './requestJobs'

// @ts-ignore
export function* handlerFetchJobs({ payload }) {
  // @ts-ignore
  const res = yield call(requestJobs, payload)
  yield put(jobsActions.setJobs(res))
}

export function* watcherSaga() {
  yield takeLatest(jobsActions.fetchJobs, handlerFetchJobs)
  // yield takeLatest(jobsActions.fetchFilteredJobs, handlerFetchJobs)
}

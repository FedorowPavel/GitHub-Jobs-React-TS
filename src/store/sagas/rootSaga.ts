import { takeLatest, call, put } from 'redux-saga/effects'
import { jobsActions } from '../jobsSlice'
import { requestJobs } from './requestJobs'

const defaultParams = {
  page: 'page=1'
}

// @ts-ignore
export function* handlerFetchJobs({ payload }) {
  const requestObject = Object.assign(defaultParams, payload)
  // @ts-ignore
  const res = yield call(requestJobs, requestObject)
  if (Object.keys(requestObject).length > 1) {
    console.log('>1', requestObject)
    yield put(jobsActions.setJobs(res))
  } else {
    console.log('else')
    yield put(jobsActions.updateJobs(res))
  }
}

export function* watcherSaga() {
  yield takeLatest(jobsActions.fetchJobs, handlerFetchJobs)
}

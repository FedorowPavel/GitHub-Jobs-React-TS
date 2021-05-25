import { call, put } from 'redux-saga/effects'
import { requestJobs } from './requestJobs'
import { jobsActions } from '../jobsSlice'

export function* handlerFetchJobs() {
  // @ts-ignore
  const res = yield call(requestJobs)
  yield put(jobsActions.setJobs(res))
}

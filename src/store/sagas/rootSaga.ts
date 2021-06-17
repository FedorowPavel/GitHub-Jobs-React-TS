import { takeLatest, call, put } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit'
import { jobsActions } from '../jobsSlice'
import { requestJobs } from './requestJobs'
import { IJob } from '../../Types/interfaces'

const defaultParams = {
  page: 'page=1'
}

type TPayload = {
  page: string
}

export function* handlerFetchJobs({ payload }: PayloadAction<TPayload>) {
  const requestObject = Object.assign(defaultParams, payload)
  const res: IJob[] = yield call(requestJobs, requestObject)
  if (Object.keys(requestObject).length > 1) {
    yield put(jobsActions.setJobs(res))
  } else {
    yield put(jobsActions.updateJobs(res))
  }
}

export function* watcherSaga() {
  yield takeLatest(jobsActions.fetchJobs, handlerFetchJobs)
}

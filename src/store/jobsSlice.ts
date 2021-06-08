import { createSlice } from '@reduxjs/toolkit'
import { InitJobState } from '../Types/interfaces'

const jobsSlice = createSlice({
  name: 'jobs',
  initialState: <InitJobState>{ jobs: [], isLoading: true, isGotAllJobsFromApi: false },
  reducers: {
    fetchJobs(state, action) {
      state.isLoading = true
      console.log(action)
    },
    setJobs(state, action) {
      if (action.payload.length < 50) {
        state.isGotAllJobsFromApi = true
      }
      // @ts-ignore
      state.jobs = action.payload
      state.isLoading = false
    },
    updateJobs(state, action) {
      if (action.payload.length < 50) {
        state.isGotAllJobsFromApi = true
      }
      // @ts-ignore
      state.jobs = [...state.jobs, ...action.payload]
      state.isLoading = false
    }

  }
})

export const jobsActions = jobsSlice.actions

export default jobsSlice

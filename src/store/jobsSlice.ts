import { createSlice } from '@reduxjs/toolkit'

interface initJobState {
  jobs: [],
  isLoading: boolean
}

const jobsSlice = createSlice({
  name: 'jobs',
  initialState: <initJobState>{ jobs: [], isLoading: true },
  reducers: {
    fetchJobs() {},
    setJobs(state, action) {
      state.jobs = action.payload
      state.isLoading = false
    }
  }
})

export const jobsActions = jobsSlice.actions

export default jobsSlice

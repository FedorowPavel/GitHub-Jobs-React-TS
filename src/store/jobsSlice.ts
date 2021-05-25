import { createSlice } from '@reduxjs/toolkit'

const jobsSlice = createSlice({
  name: 'jobs',
  initialState: { jobs: [] },
  reducers: {
    fetchJobs() {},
    setJobs(state, action) {
      state.jobs = action.payload
    }
  }
})

export const jobsActions = jobsSlice.actions

export default jobsSlice

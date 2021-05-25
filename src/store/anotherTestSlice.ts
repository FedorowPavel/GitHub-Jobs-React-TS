import { createSlice } from '@reduxjs/toolkit'

const initialTest2State = { name: 'ssss', secondName: 'pdsfdsf' }

const test2Slice = createSlice({
  name: 'test',
  initialState: initialTest2State,
  reducers: {
    printTextAnother(state) {
      // eslint-disable-next-line no-console
      console.log(`${state.name} test2Slice`)
    }

  }
})

export const test2Actions = test2Slice.actions

export default test2Slice

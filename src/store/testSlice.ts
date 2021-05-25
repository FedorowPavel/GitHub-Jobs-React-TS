import { createSlice } from '@reduxjs/toolkit'

const initialTestState = { name: 'hello', secondName: 'pavel' }

const testSlice = createSlice({
  name: 'test',
  initialState: initialTestState,
  reducers: {
    printText(state) {
      // eslint-disable-next-line no-console
      console.log(`${state.name} testSlice`)
    },
    printAnotherText(state) {
      // eslint-disable-next-line no-console
      console.log(state)
    },
    printWithAddedText(state, action) {
      // eslint-disable-next-line no-console
      console.log(action.payload)
    }
  }
})

export const testActions = testSlice.actions

export default testSlice

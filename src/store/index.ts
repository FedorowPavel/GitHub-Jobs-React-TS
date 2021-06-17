import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import jobsSlice from './jobsSlice'
import { watcherSaga } from './sagas/rootSaga'

const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware]

const store = configureStore({
  reducer: {
    jobs: jobsSlice.reducer
  },
  middleware
})

sagaMiddleware.run(watcherSaga)

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

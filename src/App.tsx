import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Main from './components/Main'
import Aside from './components/Aside/Aside'
import Header from './components/Header/Header'
import Wrapper from './components/Wrapper'
import Footer from './components/Footer'
import { jobsActions } from './store/jobsSlice'

const App: React.FC = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(jobsActions.fetchJobs())
  }, [dispatch])

  return (
    <Wrapper>
      <Header />
      <Aside />
      <Main />
      <Footer />
    </Wrapper>
  )
}

export default App

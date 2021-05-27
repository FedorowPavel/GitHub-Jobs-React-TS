import React from 'react'
import Aside from './components/Aside/Aside'
import Header from './components/Header/Header'
import Wrapper from './components/Wrapper'
import Footer from './components/Footer'
import Main from './components/Main/Main'

const App: React.FC = () => (
  <Wrapper>
    <Header />
    <Aside />
    <Main />
    <Footer />
  </Wrapper>
)

export default App

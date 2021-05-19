import React from 'react'

import Logo from './components/Header/Logo'
import Main from './components/Main'
import Aside from './components/Aside'
import Header from './components/Header/Header'
import Wrapper from './components/Wrapper'
import HeaderSearch from './components/Header/HeaderSearch'
import Footer from './components/Footer'

const App: React.FC = () => (
  <Wrapper>
    <Header>
      <Logo />
      <HeaderSearch />
    </Header>
    <Aside>
      Sidebar
    </Aside>
    <Main>
      main content
    </Main>
    <Footer>
      Footer
    </Footer>
  </Wrapper>
)

export default App

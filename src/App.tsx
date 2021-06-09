import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Aside from './components/Aside/Aside'
import Header from './components/Header/Header'
import Wrapper from './components/Wrapper'
import Footer from './components/Footer'
import Main from './components/Main/Main'

const App: React.FC = () => (
  <Switch>
    <Route path="/">
      <Wrapper>
        <Header />
        <Aside />
        <Main />
        <Footer />
      </Wrapper>
    </Route>
  </Switch>

)

export default App

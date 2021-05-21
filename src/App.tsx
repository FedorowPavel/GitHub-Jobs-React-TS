import React from 'react'
import Logo from './components/Header/Logo'
import Main from './components/Main'
import Aside from './components/Aside/Aside'
import Header from './components/Header/Header'
import Wrapper from './components/Wrapper'
import HeaderSearch from './components/Header/HeaderSearch'
import Footer from './components/Footer'
import Checkbox from './components/UI/Checkbox'
import InputSearch from './components/UI/InputSearch'
import Title from './components/Aside/Title'
import RadioInputs from './components/Aside/RadioInput'
import ListOfJobs from './components/Main/ListOfJobs'

const App: React.FC = () => (
  <Wrapper>
    <Header>
      <Logo />
      <HeaderSearch />
    </Header>
    <Aside>
      <Checkbox />
      <Title text="Location" />
      <InputSearch type="text" placeholder="City, state, zip code or country" />
      <RadioInputs name="cities" />
    </Aside>
    <Main>
      <ListOfJobs />
    </Main>
    <Footer>
      Footer
    </Footer>
  </Wrapper>
)

export default App

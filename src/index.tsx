import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'

import { Provider } from 'react-redux'
import App from './App'
import theme from './theme/theme'
import GlobalStyle from './theme/global-styles'
import store from './store'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,

  document.getElementById('root')
)

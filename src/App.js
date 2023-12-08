import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './config/theme/themeVariables'
import GlobalStyles from './config/theme/global.styled'
import Header from './component/Header'
import HeaderBanner from './component/HeaderBanner'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <ThemeProvider theme={theme}>
      {' '}
      <GlobalStyles />
      <Header />
      <HeaderBanner />
    </ThemeProvider>
  )
}

export default App

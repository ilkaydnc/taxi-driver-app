import React, { ReactNode } from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const colors = {
  success: ['#5fd3d7', '#79e07c'],
  danger: ['#515273', '#f53a68'],
}

const theme = {
  colors,
}

export const GlobalStyle = createGlobalStyle`  
  html,
  body {
    padding: 0;
    margin: 0;
    background-color: #e4f1fa;
    color: #2b2b2b;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
`

interface Props {
  children: ReactNode
}

const Layout = ({ children }: Props): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}

export default Layout

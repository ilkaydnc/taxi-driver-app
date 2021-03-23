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

  .swiper-container {
    overflow: unset !important;
    overflow-x: hidden !important;
    overflow-y: hidden !important;
    height: 100%;
  }

  .swiper-slide,
  .swiper-slide-active{
    transform: rotate(0) translate(0, 0);
    transition: 0.3s;
  }

  .swiper-slide-next {
    opacity: 0.8;
    transform: rotate(5deg) translate(10px, 20px);
    transition: 0.3s;
    transform-origin: 50% 50%;
  }

  .swiper-slide-prev {
    opacity: 0.8;
    transform: rotate(-5deg) translate(-10px, 20px);
    transition: 0.3s;
    transform-origin: 50% 50%;
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

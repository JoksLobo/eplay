import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#eee',
  black: '#111',
  gray: '#333',
  lightgray: '#95a5a6',
  green: '#10ac84'
}

export const breakPoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalCss = createGlobalStyle`
  *{
    margin:0;
    padding: 0;
    box-sizing:border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body{
    background-color:${colors.black};
    color:${colors.white};
    margin-top: 40px;
  }

  .container{
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    @media (max-width: ${breakPoints.desktop}) {
      max-width: 80%;
    }
  }
`
export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`

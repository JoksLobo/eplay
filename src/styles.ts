import styled, { createGlobalStyle } from 'styled-components'

export const Cores = {
  branca: '#eee',
  preta: '#111',
  cinza: '#333',
  verde: '#10ac84'
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
    background-color:${Cores.preta};
    color:${Cores.branca};
    margin-top: 40px;
  }

  .container{
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`

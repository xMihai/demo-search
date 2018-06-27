import styled, { injectGlobal } from 'styled-components'

// tslint:disable-next-line:no-expression-statement no-unused-expression
injectGlobal`
  html, body, #index {
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
    background-color: #eee;
  }

  * {
    box-sizing: border-box;
  }
`

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  width: 600px;
  max-width: 100%;
  padding: 16px;
`

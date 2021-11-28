import styled from 'styled-components'
import { colors } from '../vars'

export const Container = styled.section`
  margin: 20px 55px;
  padding: 45px;
  border-radius: 20px;
  background-color: #FFFFFF;

  .heading {
    h2 {
      font-size: 24px;
      font-weight: bold;
      opacity: 0.8;
    }


    p {
        font-size: 13px;
        opacity: 0.45;
        padding: 14px 0;
        line-height: 16px;
    }
  }

  .content {
    margin: 18px 0;
    display: flex;
    flex-flow: column nowrap;

    .form-error {
      font-size: 14px;
      color: red;
      padding: 8px 4px;
      font-weight: bold;
    }

    .input {
      max-width: 440px;
      min-width: 200px;
      font-size: 15px;
      padding: 14px 14px;
      border-radius: 25px;
      color: #000000;
      border: 1px solid #CCCCCC;
      outline: none;
    }

    .error {
      outline: 1px solid red;
    }
  }
`
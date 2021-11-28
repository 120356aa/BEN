import styled from 'styled-components'
import { colors } from '../vars'

export const Container = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;

  .bg {
    opacity: 0.7;
    background-color: ${colors.black};
    width: 100%;
    height: 100%;
  }

  .content {
    width: 700px;
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translateY(-10%);
    transform: translateX(-50%);
    background-color: ${colors.white};
    padding: 50px 75px;
    border-radius: 20px;

    h3 {
      font-size: 20px;
      text-align: center;
      font-weight: bold;
      margin: 10px 0;
      line-height: 28px;
      opacity: 0.85;
    }

    .exit-button {
      background-color: transparent;
      border: none;
      font-weight: bold;
      font-size: 18px;
      position: absolute;
      right: 30px;
      top: 30px;
      cursor: pointer;
    }

    .form {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-flow: column nowrap;
      padding: 30px 0 0 0;

      .errFix {
        align-self: flex-start;
      }

      .form-error {
        font-size: 14px;
        color: red;
        padding: 4px;
      }

      .input {
        padding: 14px 16px;
        font-size: 15px;
        color: ${colors.black};
        border: 1px solid ${colors.gray};
        width: 100%;
        border-radius: 10px;
        margin-bottom: 12px;
        outline: none;

        :last-child {
          margin-bottom: 0;
        }
      }

      .error {
        outline: 1px solid red;
      }
    }
  }
`
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
    width: 450px;
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translateY(-10%);
    transform: translateX(-50%);
    background-color: ${colors.white};
    padding: 40px;
    border-radius: 20px;

    h3 {
      font-size: 20px;
      text-align: center;
      font-weight: bold;
      margin: 30px 0 0px 0;
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
      padding: 30px 0 15px 0;

      .form-error {
        font-size: 14px;
        color: red;
        padding: 4px;
      }

      .input-container {
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        align-items: center;
        width: 300px;
        padding: 8px;
        margin: 0 0 10px 0;
        border: 1px solid ${colors.gray};
        border-radius: 25px;

        .phoneIcon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 1px solid ${colors.green};
          background-color: ${colors.green};
        }

        input {
          font-size: 15px;
          color: ${colors.black};
          border: none;
          margin-left: 10px;
          outline: none;
        }
      }

      .error {
        outline: 1px solid red;
      }
    }
  }
`
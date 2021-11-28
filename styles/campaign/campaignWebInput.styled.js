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
    width: 500px;
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translateY(-10%);
    transform: translateX(-50%);
    background-color: ${colors.white};
    padding: 50px;
    border-radius: 20px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;

    h3 {
      font-size: 20px;
      text-align: center;
      font-weight: bold;
      margin: 10px 0 0 0;
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

      h5 {
        font-weight: bold;
        opacity: 0.75;
      }

      .form-error {
        font-size: 14px;
        color: red;
        padding: 4px;
      }
      
      .lower-form-error {
        font-size: 14px;
        color: red;
        padding: 4px;
        margin-top: 10px;
      }

      .input-container {
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        align-items: center;
        padding: 8px;
        border: 1px solid ${colors.gray};
        border-radius: 25px;

        .icon {
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
          width: 300px;
        }
      }

      .error {
        outline: 1px solid red;
      }

      .google {
        margin-top: 10px;
      }

      .radio-button-container {
        width: 120px;
        display: flex;
        justify-content: space-between;
        margin: 15px 0 5px 0;

        .radio-button {
          border: none;
          background-color: transparent;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;

          p {
            margin-right: 3px;
          }

          .radio-btn-circle {
            margin-left: 3px;
            width: 18px;
            height: 18px;
            border-radius: 50%;
            border: 1px solid ${colors.green};
            display: flex;
            justify-content: center;
            align-items: center;

            .radio-btn-circle-inner {
              width: 12px;
              height: 12px;
              border-radius: 50%;
              border: 1px solid ${colors.green};
              background-color: ${colors.green};

            }

            .hidden {
              visibility: hidden;
            }
          }
        }
      }
    }

    .lower-form {
        padding: 0 0 15px 0;
    }
  }
`
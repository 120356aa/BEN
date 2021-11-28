import styled from 'styled-components'
import { colors } from '../vars'

export const Container = styled.section`
  margin: 20px 55px;
  padding: 45px;
  border-radius: 20px;
  background-color: #FFFFFF;

  .heading {
    h2 {
      font-size: 22px;
      font-weight: bold;
      opacity: 0.8;
      margin: 0 0 40px 0;
    }
  }

  .content {
    margin: 18px 0;
    max-width: 500px;
    min-width: 300px;

    .form-error {
      font-size: 14px;
      color: red;
      padding: 8px 4px;
      font-weight: bold;
    }

    .button-container {
      display: flex;
      flex-flow: column nowrap;
      
      button {
        align-items: center;
        display: flex;
        justify-content: space-between;
        padding: 8px 12px;
        border-radius: 10px;
        background-color: #FFFFFF;
        border: 1px solid #ECECEC;
        cursor: pointer;

        :hover {
          border: 1px solid #00A990;
          .radioBtn{
            .hidden {
              visibility: visible;
            }
          }
        }

        &:nth-child(2) {
          margin: 10px 0;
        }

        .btnHeading {
          display: flex;
          justify-content: space-between;
          align-items: center;

          .btnImg {
            border: 1px solid #CECECE;
            width: 30px;
            height: 30px;
            border-radius: 50%
          }

          h5 {
            font-size: 15px;
            margin-left: 15px;
            font-weight: lighter;
          }
        }

          .radioBtn {
            border: 1px solid #00A990;
            border-radius: 50%;
            width: 20px;
            height: 20px;
            display: flex;
            justify-content: center;
            align-items: center;

            .radioBtnInner {
              width: 12px;
              height: 12px;
              border-radius: 50%;
              border: 1px solid #00A990;
              background-color: #00A990;
            }

            .hidden {
              visibility: hidden;
            }
        }
      }
    }
  }
`
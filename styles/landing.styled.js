import styled from 'styled-components'
import { colors } from './vars'

export const Container = styled.section`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .text {
    margin: 40px 0;
    width: 700px;
    text-align: center;
    font-size: 22px;
    line-height: 32px;
  }

  div {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;

    .btn-label {
      border-radius: 30px;
      padding: 20px;
      width: 280px;
      text-align: center;
      margin: 0 10px;
      font-weight: bold;
      cursor: pointer;

      :first-child {
        color: ${colors.white};
        background-color: ${colors.green};
        
        :hover {
          background-color: ${colors.greenHover};
        }
      }

      :last-child {
        color: ${colors.green};
        border: 1px solid ${colors.green};

        :hover {
          background-color: ${colors.hoverGray};
        }
      }
    }
  }

  .img {
    margin-top: 60px;
  }
`
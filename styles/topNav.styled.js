import styled from 'styled-components'
import { colors } from '../styles/vars'

export const Container = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 36px 60px;
  
  h1 {
    font-size: 34px;
    font-weight: bold;
    opacity: 0.75;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .p-new-campaign {
      cursor: pointer;
      color: ${colors.white};
      font-weight: bold;
      font-size: 16px;
      padding: 12px 40px;
      border: 1px solid ${colors.green};
      background-color: ${colors.green};
      border-radius: 20px;
      
      :hover {
          background-color: ${colors.greenHover};
      }
    }

    button {
      border: none;
      background-color: transparent;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      :nth-child(2) {
        margin: 0 30px;
      }

      .image-placeholder {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: ${colors.greenShadow};
      }

      .p-notifications {
        font-size: 16px;
        font-weight: bold;
        opacity: 0.85;
        margin-left: 8px;
      }

      .avatar {
        width: 44px; 
        height: 44px;
        border-radius: 50%;
        background-color: ${colors.green};
      }

      .down-arrow-image {
        margin-left: 10px;
        background-color: ${colors.greenShadow};
        border-radius: 50%;
        padding: 8px 8px 4px 8px;
      }
    }
  }
`
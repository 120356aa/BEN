import styled from 'styled-components'
import { colors } from '../../styles/vars'

export const Container = styled.nav`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  min-width: 300px;
  height: 100vh;
  background-color: ${colors.white};

  .logo-image {
    margin: 20px 0 0 0;
  }

  nav {
    align-self: flex-start;
    margin: 20px 0 0 0;
    width: 100%;

    .link {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      width: 90%;
      padding: 16px 24px;
      border-radius: 0 10px 10px 0;
      cursor: pointer;
      font-weight: bold;

      :hover {
        background-color: ${colors.green};

        .label {
          color: ${colors.white};
          opacity: 1;
        }
      }

      .label {
        padding: 0 10px;
        opacity: 0.8;
      }

      .active-label {
        color: ${colors.white};
        opacity: 1;
      }
    }

    .active-link {
      background-color: ${colors.green};
      border: 1px solid ${colors.green};
    }
  }
`
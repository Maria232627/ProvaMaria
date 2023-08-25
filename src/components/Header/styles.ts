import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"

export const Header = styled.header`
  /* Cabeçalho */
  border-bottom: 0.4rem solid ${colors.primary};
  display: flex;
  height: 6rem;
`

export const NavBar = styled.nav`
  /* Navegação */
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: left;
  ul {
    display: flex;
    align-items: center;
    height: 100%;
    li {
      padding: 1rem;
      height: 100%;
      display: flex;
      a {
        text-decoration: none;
        color: var(--black);
      }
    }
    li:hover {
      background-color: ${colors.secondary};
    }
  }

`
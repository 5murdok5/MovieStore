import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const NavCustomSt = styled.nav`

  height: 40px;
  background-color: #cccccc69;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  padding: 16px 0px 35px 0px;
`

export const NavLinksCustom = styled(NavLink)`

  color: white;
  padding: 0px 10px;
  text-decoration: none;
  font-weight: 600;
  align-items: center;
  transition: 0.35s cubic-bezier(0.54, 1.6, 0.5, 1);
  &:hover {
    color: #ff3d3d;
  }
`

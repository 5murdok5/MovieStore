import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const NavCustomSt = styled.nav`
    height: 40px;
    background-color: #cccccc69;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10;
`

export const NavLinksCustom = styled(NavLink)`
    color: white;
    padding: 0px 10px;
    text-decoration: none;
    font-weight: 600;
    align-items: center;
`
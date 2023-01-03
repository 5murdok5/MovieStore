import { NavCustomSt, NavLinksCustom } from '../styles/NavCustom.style'

const NavCustom = () => {
  return (
    <header>
      <NavCustomSt>
        <ul>
          <NavLinksCustom to={'/home'}>
            <span className="pc-mtext">Catálogo</span>
          </NavLinksCustom>
          <NavLinksCustom to={'/cart'}>
            <span className="pc-mtext">Cart</span>
          </NavLinksCustom>
          <NavLinksCustom to={'/login'}>
            <span className="pc-mtext">Login</span>
          </NavLinksCustom>
        </ul>
      </NavCustomSt>
    </header>
  )
}

export default NavCustom

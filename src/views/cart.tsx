import { useContext } from 'react'
import CardMovie from '../components/cardMovie'
import { MovieContext } from '../context/MovieContext'
import { CartSection } from '../styles/Cart.style'
import { TitlesItems } from '../styles/globalstyle'
import { ContMoviesCart } from '../styles/moviesContainer.style'
import { NavLinksCustom } from '../styles/NavCustom.style'

const Cart = () => {
  const { MoviesBuyState, ClearMovies } = useContext(MovieContext)
  let { listMovies, total } = MoviesBuyState
  return (
    <>
      <TitlesItems>Carrito</TitlesItems>
      <CartSection.MoviesCart>
        <ContMoviesCart>
          {listMovies.map((vls, idx) => {
            return (
              <CardMovie
                movie={vls.movie}
                key={`${vls.movie.imdbID}_price_${idx}`}
                from="CART"
              />
            )
          })}
        </ContMoviesCart>
      </CartSection.MoviesCart>
      {listMovies.length === 0 && (
        <CartSection.InfoNoItems>
          No hay items agregados al carrito, ir a
          <NavLinksCustom to={'/home'}>
            <span className="pc-mtext">Catálogo</span>
          </NavLinksCustom>
        </CartSection.InfoNoItems>
      )}
      {listMovies.length !== 0 && (
        <CartSection.ContCost>
          <CartSection.InfoPrice>
            <h3>Precio total:</h3> <span>$ {total.toFixed(2)}</span>
          </CartSection.InfoPrice>
          <CartSection.BtnConfirm onClick={ClearMovies}>
            Finalizar Compra
          </CartSection.BtnConfirm>
        </CartSection.ContCost>
      )}
    </>
  )
}

export default Cart

import { useContext } from 'react'
import CardMovie from '../components/cardMovie'
import { MovieContext } from '../context/MovieContext'
import { CartSection } from '../styles/Cart.style'
import { TitlesItems } from '../styles/globalstyle'
import { ContMoviesCart } from '../styles/moviesContainer.style'

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
      <CartSection.ContCost>
        <CartSection.InfoPrice><h3>Precio total:</h3> <span>$ {total.toFixed(2)}</span></CartSection.InfoPrice>
        <CartSection.BtnConfirm onClick={ClearMovies}>Finalizar Compra</CartSection.BtnConfirm>
      </CartSection.ContCost>
    </>
  )
}

export default Cart

import { HookCart } from '../hook/Hook_cart'
import { Movie } from '../interfaces/movies'
import { ContBtns } from '../styles/cardmovie.style'
import { getTypeServ } from '../utils/helpers/getTypeServices';
import {
  ButtonBuy,
  ButtonCancel,
  ButtonConfirm,
  ButtonDeleteCart,
  ButtonRent,
} from '../styles/globalstyle'
import {
  ContBtnsShop,
  ContBuyActions,
  FomrShop,
  InpCont,
  InputCustom,
} from '../styles/inputCustom'

type PropsForm = {
  movie: Movie
  from: string
}
const FormMovies = ({ movie, from = 'HOME' }: PropsForm) => {
  const {
    idMovie,
    values,
    onChangeVl,
    clearBuy,
    addtoCart,
    selectServ,
    removeMovie,
  } = HookCart()
  const { typeServise, startDate, endDate, count } = values

  return (
    <ContBuyActions>
      <h1>{getTypeServ(typeServise!)}</h1>
      {typeServise && idMovie === movie.imdbID && (
        <FomrShop onSubmit={(e) => addtoCart(e, movie)}>
          <InpCont>
            <InputCustom>
              <label>Unidades:</label>
              <input
                type={'number'}
                placeholder="1"
                min={1}
                value={count}
                name="count"
                onChange={onChangeVl}
              />
            </InputCustom>
            {typeServise === 'rent' && (
              <>
                <InputCustom>
                  <label>Inicio:</label>
                  <input
                    type={'date'}
                    name="startDate"
                    value={startDate}
                    onChange={onChangeVl}
                  />
                </InputCustom>
                <InputCustom>
                  <label>Fin:</label>
                  <input
                    type={'date'}
                    name="endDate"
                    value={endDate}
                    onChange={onChangeVl}
                  />
                </InputCustom>
              </>
            )}
          </InpCont>
          <ContBtnsShop>
            <ButtonCancel onClick={clearBuy} type={'button'}>
              Cancelar
            </ButtonCancel>
            <ButtonConfirm>Agregar a Carrito</ButtonConfirm>
          </ContBtnsShop>
        </FomrShop>
      )}
      <div>
          {idMovie !== movie.imdbID && (
            <>
              {from === 'HOME' && (
        <ContBtns>
                <>
                  <ButtonRent onClick={() => selectServ('rent', movie.imdbID)}>
                    Rentar
                  </ButtonRent>
                  <ButtonBuy onClick={() => selectServ('buy', movie.imdbID)}>
                    Comprar
                  </ButtonBuy>
                </>
                </ContBtns>
              )}
              <div>
                {from === 'CART' && (
                  <ButtonDeleteCart onClick={() => removeMovie(movie.imdbID)}>
                    Eliminar de Carrito
                  </ButtonDeleteCart>
                )}
              </div>
            </>
          )}
      </div>
    </ContBuyActions>
  )
}

export default FormMovies

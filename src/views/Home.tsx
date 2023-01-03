import CardMovie from '../components/cardMovie'
import { HookMovies } from '../hook/Hook_movies'
import { ButtonCancel, ButtonConfirm, ButtonError, TitlesItems } from '../styles/globalstyle'
import { Load } from '../styles/load'
import { ContMovies } from '../styles/moviesContainer.style'

const Home = () => {
  const { values, testLoad, getTestMovies } = HookMovies()
  const { movies, loadMovies } = values
  return (
    <div>
      <ButtonError>
        <ButtonCancel onClick={testLoad}>Simular Carga Erronea</ButtonCancel>
      </ButtonError>
      <TitlesItems>Catálogo</TitlesItems>
      {loadMovies ? (
        <Load />
      ) : movies ? (
        <ContMovies>
          {movies?.map((vl) => {
            return <CardMovie key={vl.imdbID} movie={vl} from="HOME" />
          })}
        </ContMovies>
      ) : (
        <div>
          <div>
            Error al obtener listado. Intente nuevamente, preciona aceptar para
            obtener de nuevo
          </div>
          <ButtonConfirm onClick={getTestMovies}>Aceptar</ButtonConfirm>
        </div>
      )}
    </div>
  )
}

export default Home

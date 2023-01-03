import { MoviesBuyState, MoviesServ } from '../interfaces/movies'
import { calculatePrice } from '../utils/helpers/getFinalPrice'

type MovieAction =
  | { type: 'addMovie'; payload: MoviesServ }
  | { type: 'removeMovie'; payload: string }
  | { type: 'selectMovie'; payload: string }
  | { type: 'clearCart' }

export const MoviesReducer = (
  state: MoviesBuyState,
  action: MovieAction,
): MoviesBuyState => {
  switch (action.type) {
    case 'addMovie':
      let listMoviess: Array<MoviesServ> = [
        ...state.listMovies,
        {
          ...action.payload,
          movie: {
            ...action.payload.movie,
            imdbID: `${action.payload.movie.imdbID}_${Math.random() * 3}`,
          },
        },
      ]
      return {
        ...state,
        listMovies: listMoviess,
        total: calculatePrice(listMoviess),
      }
    case 'removeMovie':
      let listRmMovies = state.listMovies.filter(
        (item) => item.movie.imdbID !== action.payload,
      )
      return {
        ...state,
        listMovies: listRmMovies,
        total: calculatePrice(listRmMovies),
      }
    case 'selectMovie':
      return {
        ...state,
        idMovie: action.payload,
      }
    case 'clearCart':
      return {
        ...state,
        listMovies: [],
        total: 0,
      }
    default:
      return state
  }
}

import { useReducer } from 'react'
import { Movie, MoviesBuyState } from '../interfaces/movies'
import { MoviesReducer } from '../reducers/MovieReduces'
import { MovieContext } from './MovieContext'

interface props {
  children: JSX.Element | JSX.Element[]
}

const INITIAL_STATE: MoviesBuyState = {
  total: 0,
  listMovies: [],
  idMovie: '',
}
export const MovieProvider = ({ children }: props) => {
  const [MoviesBuyState, dispatch] = useReducer(MoviesReducer, INITIAL_STATE)

  const AddMovies = (
    movie: Movie,
    count: Number,
    typeServ: String,
    startDate: number,
    endDate: number,
  ) => {
    dispatch({
      type: 'addMovie',
      payload: {
        count: count,
        dateStart: startDate,
        dateEnd: endDate,
        movie: movie,
        typeService: typeServ,
      },
    })
  }
  const RemoveMovies = (idMovie: string) => {
    dispatch({
      type: 'removeMovie',
      payload: idMovie,
    })
  }

  const ClearMovies = () => {
    dispatch({
      type: 'clearCart',
    })
  }
  const SelectMovie= (idMovie: string) => {
    dispatch({
      type: 'selectMovie',
      payload: idMovie,
    })
  }

  const values = { MoviesBuyState, AddMovies, RemoveMovies, ClearMovies, SelectMovie }

  return (
    <MovieContext.Provider value={values}>{children}</MovieContext.Provider>
  )
}

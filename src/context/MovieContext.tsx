import { createContext } from 'react'
import { MoviesBuyState, Movie } from '../interfaces/movies';

export type MovieContextProps = {
  MoviesBuyState: MoviesBuyState
  AddMovies:(   
    movie: Movie,
    count: number,
    typeServ: String,
    startDate: number,
    endDate: number) => void;
  RemoveMovies: (idMovie: string) => void
  SelectMovie: (idMovie: string) => void
  ClearMovies: () => void
}

export const MovieContext = createContext<MovieContextProps>(
  {} as MovieContextProps,
)
